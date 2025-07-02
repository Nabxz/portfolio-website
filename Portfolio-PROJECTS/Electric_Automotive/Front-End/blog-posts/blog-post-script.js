/* Sign Up For Newsletter - Using Node.js */
const emailInput = document.querySelector('.email-box input');
const feedbackMessage = document.getElementById("feedbackMessage");
const signupButton = document.getElementById("signupButton");
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener('submit', function(event) {
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

    fetch('http://localhost:3000/api/subscribe', {
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