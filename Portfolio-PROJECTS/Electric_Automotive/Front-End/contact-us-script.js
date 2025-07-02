
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



/* CONTACT US FORM */
const contactForm = document.getElementById('contactForm');
const responseMessageDiv = document.getElementById("responseMessage");

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Form submitted");

    const formData = new FormData(contactForm);

    for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }

    const data = new URLSearchParams();
    for (const pair of formData) {
        data.append(pair[0], pair[1]);
    }

    fetch('https://electric.mammani.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
    })

        .then(response => response.json())
        .then(data => {
            if (data.success) {
                responseMessageDiv.textContent = 'Successfully sent!';
                responseMessageDiv.style.color = 'green';
            } else {
                responseMessageDiv.textContent = data.message;
                responseMessageDiv.style.color = 'red';
            }
        })
        .catch(error => {
            responseMessageDiv.textContent = 'There was an error submitting the form. Please try again.';
            responseMessageDiv.style.color = 'red';
        });
});





