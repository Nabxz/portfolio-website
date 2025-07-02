/* USING JQUERY FOR FILTERING BLOG POSTS */

$(document).ready(function () {

    // Hide all blog posts initially
    $(".blog-post-box").hide();

    // Show all blog posts when the page loads
    $(".blog-post-box").show();

    // Filter blog posts when a tag button is clicked
    $(".blog-fetch-tag").on("click", function () {

        // Get the filter value (id of the input radio button)
        let filter = $(this).prev("input").attr("id");

        // Hide all blog posts
        $(".blog-post-box").hide();

        // Show only the blog posts that match the filter
        if (filter === "filter-reset") {
            $(".blog-post-box").show();
        } else {
            $(".blog-post-box." + filter.replace("filter-", "")).show();
        }
    });
});



// Live search functionality for blog posts using jquery
$(document).ready(function () {
    let searchTimeout;

    $(".blog-post-search input").on("keyup", function () {
        clearTimeout(searchTimeout);  // Clear the previous timeout

        searchTimeout = setTimeout(() => {
            let value = $(this).val().toLowerCase();

            $(".blog-post-box").filter(function () {
                let titleMatches = $(this).find('.blog-title').text().toLowerCase().indexOf(value) > -1;
                let tagMatches = $(this).find('.display-tags p').text().toLowerCase().indexOf(value) > -1;
                $(this).toggle(titleMatches || tagMatches);
            });
        }, 300);  // Wait for 300ms after the user stops typing
    });
});





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



/* MAKING BLOG POST IMAGES ANIMATE */
document.querySelectorAll('.blog-post-box img').forEach(function (img) {
    img.addEventListener('mousemove', function (e) {
        const boundingBox = img.getBoundingClientRect();

        // Calculate the relative cursor position from the center
        const relX = e.clientX - (boundingBox.left + boundingBox.width / 2);
        const relY = e.clientY - (boundingBox.top + boundingBox.height / 2);

        // Determine the skew amount with reduced sensitivity and a non-linear effect
        const skewX = (relY / boundingBox.height * 10) * (relY / boundingBox.height);
        const skewY = -(relX / boundingBox.width * 10) * (relX / boundingBox.width);

        // Reduced scale for a subtle zoom-in effect
        img.style.transform = `scale(1.02) skewX(${skewX}deg) skewY(${skewY}deg)`;
    });

    img.addEventListener('mouseleave', function (e) {
        img.style.transform = 'scale(1) skewX(0) skewY(0)'; // Reset the skew and scale when mouse leaves the image
    });
});








