/* Sign Up For Newsletter - Using Node.js */
const emailInput = document.querySelector('.email-box input');
const feedbackMessage = document.getElementById("feedbackMessage");
const signupButton = document.getElementById("signupButton");
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInput.value.trim();  // assuming you want to get the email value

    // Basic email validation
    if (!email || !email.includes('@')) {
        emailInput.style.borderColor = "red";
        feedbackMessage.textContent = "Please enter a valid email.";
        feedbackMessage.style.color = "red";
        return;  // exit the function if email is not valid
    } else {
        emailInput.style.borderColor = "";  // Reset to default
        feedbackMessage.textContent = "";  // Reset the message
    }

    signupButton.textContent = "Signing Up..."; // change button text

    fetch('https://electric.mammani.com/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })

        .then(response => response.json())
        .then(data => {
            signupButton.textContent = "Sign Up";  // reset button text after fetch

            if (data.success) {
                feedbackMessage.textContent = "Thanks for subscribing!";
                feedbackMessage.style.color = "green";
            } else {
                feedbackMessage.textContent = "There was an error. Please try again.";
                feedbackMessage.style.color = "red";
            }
        })
        .catch(error => {
            signupButton.textContent = "Sign Up";  // reset button text if there's an error
            feedbackMessage.textContent = "There was an error. Please try again.";
            feedbackMessage.style.color = "red";
        });
});


/* Immediately Check If User Is Signed In*/
function isUserAuthenticated(callback) {
    fetch('https://electric.mammani.com/api/profile', {
        method: 'GET',
        credentials: 'include' // Important to send and receive cookies
    })
        .then(response => response.json())
        .then(data => {
            if (data.email) { // If the email property exists, the user is authenticated
                callback(true);
            } else {
                callback(false);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            callback(false);
        });
}

isUserAuthenticated(isAuthenticated => {
    if (isAuthenticated) {
        axios.get('https://electric.mammani.com/api/profile', {
            withCredentials: true
        })
            .then(response => {
                // User is already logged in, redirect to dashboard
                window.location.href = './user-account-page.html';
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    console.log('User is not authenticated');
                }
            });
    }
});


/* SIGN IN */
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Fetch values from the form
    let email = e.target.username.value;
    let password = e.target.password.value;
    let errorDiv = e.target.querySelector('.error-message');

    // Send an AJAX request to the server to authenticate
    axios.post('https://electric.mammani.com/api/login', {
        email: email,
        password: password
    }, {
        withCredentials: true
    })
        .then(response => {
            if (response.data.success) {
                errorDiv.textContent = 'Successfully signed in!';
                errorDiv.classList.remove('error-message');
                errorDiv.classList.add('success-message');

                // Add a delay of 1 second (1000 milliseconds) before redirecting
                setTimeout(() => {
                    window.location.href = './user-account-page.html';
                }, 800);

            } else {
                errorDiv.textContent = response.data.message;
                errorDiv.classList.remove('success-message');
                errorDiv.classList.add('error-message');
            }
        })
        .catch(error => {
            console.error(error);
            if (error.response && error.response.status === 401) {
                errorDiv.textContent = 'Invalid email or password. Please try again.';
            } else {
                errorDiv.textContent = 'An unexpected error occurred. Please try again later.';
            }
            errorDiv.classList.remove('success-message');
            errorDiv.classList.add('error-message');
        });
});



/* Create Account */
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Fetch values from the form
    let email = e.target.email.value;
    let password = e.target.password.value;
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let errorDiv = e.target.querySelector('.error-message');

    // Send an AJAX request to the server to create the user account
    axios.post('https://electric.mammani.com/api/signup', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }, {
        withCredentials: true
    })
        .then(response => {
            if (response.data.success) {
                errorDiv.textContent = 'Account created successfully!';
                errorDiv.classList.remove('error-message'); // remove the error color
                errorDiv.classList.add('success-message'); // add the success color

            } else {
                errorDiv.textContent = response.data.message;
                errorDiv.classList.add('error-message'); // ensure the error color is shown
                errorDiv.classList.remove('success-message'); // remove the success color
            }
        })
        .catch(error => {
            console.error(error);
            errorDiv.textContent = 'Error occurred. Please try again.';
            errorDiv.classList.add('error-message'); // ensure the error color is shown
            errorDiv.classList.remove('success-message'); // remove the success color

            if (error.response.status === 400) {
                errorDiv.textContent = error.response.data.message;
                errorDiv.classList.add('error-message');
            }
        });
});

/* Forgot Password */
document.getElementById('forgotPasswordLink').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default action (navigation) of the link

    let email = prompt("Please enter your email for password recovery:");

    if (email) {
        // Here, normally, you would send the email to the server for further processing
        axios.post('https://electric.mammani.com/api/forgot-Password', {
            email: email
        }, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.success) {
                    alert('Password reset link sent to your email. Please check your inbox.');
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error(error);
                alert('An error occurred. Please try again later.');
            });
    }
});
