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



/* DISPLAY USER PROFILE */

/* Fetching User's Name */
$(document).ready(function() {
    // Fetch profile data
    $.ajax({
        url: 'https://electric.mammani.com/api/profile',
        method: 'GET',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            // Display user data on the page
            $('#userEmail').text(data.email);
            $('#userName').text(data.firstName + ' ' + data.lastName);
        },
        error: function(err) {
            console.error("Error fetching profile:", err);
            // Handle error, maybe redirect to login page
            window.location.href = './sign-in-page.html'; // Assuming you have a login.html page
        } 
    });

    // Logout Button
    $('#logoutButton').click(function() {
        $.ajax({
            url: 'https://electric.mammani.com/api/logout',
            method: 'GET',
            xhrFields: {
                withCredentials: true
            },
            success: function() {
                window.location.href = './sign-in-page.html';
            },
            error: function(err) {
                console.error("Error logging out:", err);
                // Handle error
            }
        });
    });
});

/* View Notifications */
document.getElementById("viewToggle").addEventListener("click", function(event){
    event.preventDefault(); // To prevent the default link behavior

    var messagesDiv = document.getElementById("messages");
    if(messagesDiv.classList.contains("active")) {
        messagesDiv.classList.remove("active");
        this.textContent = "View";  // Changes the link text back to "View"
    } else {
        messagesDiv.classList.add("active");
        this.textContent = "Hide";  // Changes the link text to "Hide"
    }
});

/* View - Edit Profile */
document.getElementById("editProfileToggle").addEventListener("click", function(event) {
    event.preventDefault();

    var editOptionsDiv = document.getElementById("editOptions");
    var editForms = document.querySelectorAll(".editForm");

    if (editOptionsDiv.classList.contains("active")) {
        editOptionsDiv.classList.remove("active");

        // Hide any open edit forms when collapsing the editOptions
        editForms.forEach(function(form) {
            form.classList.remove("active");
        });
    } else {
        editOptionsDiv.classList.add("active");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var editLinks = document.querySelectorAll(".editToggle");
    var editForms = document.querySelectorAll(".editForm");
    
    editLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            // Hide all edit forms
            editForms.forEach(function(form) {
                form.classList.remove("active");
            });
            
            // Show the specific edit form
            var targetForm = document.getElementById(this.getAttribute("data-target"));
            targetForm.classList.add("active");
        });
    });
});



/* EDIT PROFILE FUNCTIONALITIES */
$(document).ready(function() {
    // Function to toggle the edit forms
    function toggleEditForm(targetFormId) {
        $(".editForm").removeClass("active"); // Hide all edit forms
        $("#" + targetFormId).addClass("active"); // Show the selected edit form
    }

    // Change Username (first and last name)
    $("#changeUsername button").click(function() {
        var newFirstName = $("#newFirstName").val();
        var newLastName = $("#newLastName").val();

        // Send a request to update the names
        $.ajax({
            type: 'POST',
            url: "https://electric.mammani.com/api/update-username",
            data: { newFirstName: newFirstName, newLastName: newLastName },
            xhrFields: {
                withCredentials: true
            },
            success: function(response) {
                if (response.success) {
                    alert("Names updated successfully!");
                    // You may want to update the displayed names in the dashboard here
                    $("#userName").text(newFirstName + ' ' + newLastName);
                } else {
                    alert(response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error(error);
                alert("An error occurred while updating the names.");
            }
        });
    });



    // Change Email
    $("#changeEmail button").click(function() {
        var newEmail = $("#newEmail").val();

        // Send a request to update the email
        $.ajax({
            type: 'POST',
            url: "https://electric.mammani.com/api/update-email",
            data: { newEmail: newEmail },
            xhrFields: {
                withCredentials: true // Include cookies (session data)
            },
            success: function(response) {
                if (response.success) {
                    alert("Email updated successfully!");

                    // Update the displayed email in the HTML
                    $("#userEmail").text(newEmail);
                } else {
                    alert(response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error(error);
                alert("An error occurred while updating the email.");
            }
        });
    });


    // Change Password
    $("#changePassword button").click(function() {
        var oldPassword = $("#oldPassword").val();
        var newPassword = $("#newPassword").val();
    
        // Send a request to update the password
        $.ajax({
            type: 'POST',
            url: "https://electric.mammani.com/api/update-password",
            data: { oldPassword: oldPassword, newPassword: newPassword },
            xhrFields: {
                withCredentials: true // Include cookies (session data)
            },
            success: function(response) {
                if (response.success) {
                    alert("Password updated successfully!");
                    // Clear password fields or perform any other desired actions
                } else {
                    alert(response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error(error);
                alert("An error occurred while updating the password.");
            }
        });
    });

});


