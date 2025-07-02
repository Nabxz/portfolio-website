
/* USING DYNAMIC VIDEO HEIGHT TO CREATE MARGING FOR NEXT PAGE */
const videoElement = document.getElementById("bannerVideo");
const pushElement = document.querySelector(".findyourcar-page");

// Function to set the margin
const setTopMargin = () => {
    const videoHeight = videoElement.offsetHeight;
    pushElement.style.marginTop = videoHeight + "px";
};

// Set initial margin
setTopMargin();

// Update margin when the window is resized
window.addEventListener("resize", setTopMargin);

// Select the video element
const video = document.getElementById('bannerVideo');

// Select the image element
const image = document.getElementById('bannerImage');

// Listen for the 'ended' event on the video element
video.addEventListener('ended', function () {
    // Hide the video
    video.style.display = 'none';

    // Show the image
    image.style.display = 'block';
});



/* VIDEO SHOULD PLAY ONLY THE FIRST TIME THE WEBSITE 
    IS OPEN OR AFTER REWATCH VIDEO IS CLICKED */
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bannerVideo');
    const image = document.getElementById('bannerImage');
    const fadeOutTime = 2; // Time in seconds to start fade-out before video ends

    image.style.opacity = '0';

    if (!localStorage.getItem('videoPlayed')) { // If the video hasn't been played before
        video.play();

        video.addEventListener('timeupdate', () => {
            const timeLeft = video.duration - video.currentTime;

            if (timeLeft <= fadeOutTime) {
                fadeOutAudio(video, fadeOutTime);
                video.classList.add('fade-out');
            }
        });

        video.addEventListener('ended', () => {
            video.style.display = 'none';
            image.classList.add('fade-in');
            image.style.opacity = '1';
            localStorage.setItem('videoPlayed', true); // Mark the video as played
        });
    } else { // If the video has been played before
        image.style.opacity = '1';
    }
});


const replayVideoButton = document.getElementById('replayVideo');

replayVideoButton.addEventListener('click', () => {
    video.currentTime = 0; // Reset video time
    video.volume = 1; // Reset volume to original
    video.style.display = 'block';
    image.style.opacity = '0';
    video.play();
});






/* SWITCH TO PICTURE AFTER VIDEO */
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bannerVideo');
    const image = document.getElementById('bannerImage');
    const fadeOutTime = 2; // Time in seconds to start fade-out before video ends

    image.style.opacity = '0';

    video.addEventListener('timeupdate', () => {
        const timeLeft = video.duration - video.currentTime;

        if (timeLeft <= fadeOutTime) {
            fadeOutAudio(video, fadeOutTime);
            video.classList.add('fade-out');
        }
    });

    video.addEventListener('ended', () => {
        video.style.display = 'none';
        image.classList.add('fade-in');
        image.style.opacity = '1';
    });
});



/* FADE INTO PICTURE AND FADE AUDIO */
function fadeOutAudio(videoElement, fadeOutTime) {
    let originalVolume = videoElement.volume;
    let volumeStep = originalVolume / (fadeOutTime * 10); // Assuming we are reducing volume every 100ms

    let fadeAudioInterval = setInterval(() => {
        if (videoElement.volume > 0.1) {
            videoElement.volume -= volumeStep;
        } else {
            // Stop the interval and reset volume to original value
            clearInterval(fadeAudioInterval);
            videoElement.volume = originalVolume;
        }
    }, 100);
}



/* FIND YOUR CAR BUTTONS & FUNCTIONAL DETAILS */
const images = document.querySelectorAll(".carousel-image");
const innerLines = document.querySelectorAll(".inner-line");

const brandData = [
    {
        name: "Lamborghini Lanzador",
        subName: "Designed By New Desires",
        horsePower: "1341 hp",
        speed: "0-100 km/h in 3.2 sec",
        link: "./Cars For Sale/lamborghini-lanzador.html"
    },
    {
        name: "Tesla Model S",
        subName: "Model S Celestial",
        horsePower: "1,020 hp",
        speed: "0-100 km/h in 2.1 sec",
        link: "./Cars For Sale/tesla-model-s.html"
    },
    {
        name: "BMW i8 Elysium",
        subName: "Crafted By Electric Elegance",
        horsePower: "369 hp",
        speed: "0-100 km/h in 4.4 sec",
        link: "./Cars For Sale/bmw-elysium.html"
    }
];

// Update the content in the .functional class
function updateFunctionalContent(index) {
    // Get the related data for the given index
    let data = brandData[index];

    // Update the content in the .functional class
    document.querySelector('.functional .name p').innerText = data.name;
    document.querySelector('.functional .sub-name p').innerText = data.subName;
    document.querySelector('.functional .horse-power p').innerText = data.horsePower;
    document.querySelector('.functional .speed p').innerText = data.speed;
    document.querySelector('.functional .viewLink a').setAttribute("href", data.link);
}

// Set an event listener on buttons
document.querySelectorAll('.buttons button').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all inner lines and images
        innerLines.forEach(line => line.style.display = 'none');
        images.forEach(img => img.style.display = 'none');

        // Show the inner line and image that matches the index
        innerLines[index].style.display = "block";
        images[index].style.display = "block";

        // Update the functional content
        updateFunctionalContent(index);

    });
});

// Initialize the website with the first brand's details
window.addEventListener('DOMContentLoaded', (event) => {
    updateFunctionalContent(0);
    innerLines[0].style.display = "block";
});



/* FAQ */
document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function (question) {
        question.querySelector('h5').addEventListener('click', function () {
            const answer = question.querySelector('.faq-answer');
            const toggle = question.querySelector('.toggle');

            if (!question.classList.contains('active')) {
                question.classList.add('active');
                toggle.textContent = '-';
            } else {
                question.classList.remove('active');
                toggle.textContent = '+';
            }
        });
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
