// ======================= API KEYS =========================
// These are public API keys used only for frontend access.
// No sensitive or private data is exposed.
const NINJA_API_KEY = 'SIXR4HfeuM/pnmiN/JYDAw==ZtPyP4PN0vYLqdmr'
// =========================================================

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


/* CARS API */
/* Ensuring Correct Date */
document.addEventListener('DOMContentLoaded', function () {
    const carYearInput = document.getElementById('carYear');

    carYearInput.addEventListener('input', function () {
        if (this.value > this.max) {
            this.value = this.max;
        } else if (this.value < this.min) {
            this.value = this.min;
        }
    });
});

/* Using API for data */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", searchCarInfo);
});

function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, function (letter) {
        return letter.toUpperCase();
    });
}

function searchCarInfo() {
    var model = document.getElementById("carModel").value.trim().toLowerCase();
    var year = document.getElementById("carYear").value.trim();

    // Handle hardcoded routes for some known models
    const redirects = {
        tesla: './Cars For Sale/tesla-model-s.html',
        bmw: './Cars For Sale/bmw-elysium.html',
        lamborghini: './Cars For Sale/lamborghini-lanzador.html',
        mercerdes: './Cars For Sale/mercedes-eqa.html'
    };

    if (redirects[model]) {
        window.location.href = redirects[model];
        return;
    }


    let url = `https://api.api-ninjas.com/v1/cars?model=${encodeURIComponent(model)}`;
    if (year && /^\d{4}$/.test(year)) {
        url += `&year=${encodeURIComponent(year)}`;
    }

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': NINJA_API_KEY
        }
    })
    .then(response => {
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        return response.json();
    })
    .then(data => {
        const carResultsDiv = document.querySelector(".car-results");
        carResultsDiv.innerHTML = "";

        if (!data || data.length === 0) {
            carResultsDiv.innerHTML = "No car found.";
            return;
        }

        data.forEach(car => {
            const carDiv = document.createElement("div");
            carDiv.className = "car-card";

            const capitalizedMake = capitalizeFirstLetter(car.make);
            const capitalizedModel = capitalizeFirstLetter(car.model);
            const capitalizedClass = capitalizeFirstLetter(car.class);
            const capitalizedFuelType = capitalizeFirstLetter(car.fuel_type);
            const capitalizedTransmission = car.transmission === 'a' ? 'Automatic' : 'Manual';

            const carDetails = `
                <h6>${capitalizedMake} ${capitalizedModel} (${car.year})</h6>
                <p><strong>Class:</strong> ${capitalizedClass}</p>
                <p><strong>MPG (City):</strong> ${car.city_mpg}</p>
                <p><strong>MPG (Highway):</strong> ${car.highway_mpg}</p>
                <p><strong>Fuel Type:</strong> ${capitalizedFuelType}</p>
                <p><strong>Transmission:</strong> ${capitalizedTransmission}</p>
                <a href="./find-dealership-page.html" class="dealership-button">Find a Dealership</a>
            `;

            carDiv.innerHTML = carDetails;
            carResultsDiv.appendChild(carDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching car info:', error);
        document.querySelector(".car-results").innerHTML = "Failed to load data. Please try again.";
    });
}








