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



/* MAP */
// Sample data for dealerships. You can fetch this from a database or API in the future.
var dealerships = [
    {
        lat: 49.8951,
        lon: -97.1384,
        name: "Electric Automotive Dealership - Downtown",
        phoneNumber: "204-1234-567"
    },
    {
        lat: 49.8230,
        lon: -97.1073,
        name: "Electric Automotive Dealership - Pembina",
        phoneNumber: "204-1234-567"
    },
    {
        lat: 49.8371,
        lon: -97.2099,
        name: "Electric Automotive Dealership - Kenaston",
        phoneNumber: "204-1234-567"
    },
    {
        lat: 49.9380,
        lon: -97.2121,
        name: "Electric Automotive Dealership - McPhillips",
        phoneNumber: "204-1234-567"
    },
    {
        lat: 49.7867,
        lon: -97.1647,
        name: "Electric Automotive Dealership - Bridgewater",
        phoneNumber: "204-1234-567"
    },
];

function displayDealerships() {
    dealerships.forEach(dealership => {
        L.marker([dealership.lat, dealership.lon])
            .bindPopup(`
              <div class="dealership-info">
                  <span class="dealership-name">${dealership.name}</span><br>
                  ${dealership.address || "Address not available"}<br>
                  Phone: ${dealership.phoneNumber}
              </div>
          `)
            .bindTooltip(dealership.name, { permanent: true, offset: [-20, -20], direction: 'top' })
            .addTo(map);
    });
}

// Initialize map centered on Winnipeg
var map = L.map('map').setView([49.8951, -97.1384], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

displayDealerships();  // Display dealership markers immediately after initializing the map

var searchMarker; // To hold the marker for search results

document.getElementById('search-button').addEventListener('click', searchLocation);
document.getElementById('reset-button').addEventListener('click', resetMap);

function searchLocation() {
    var location = document.getElementById('location-input').value;

    var redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Use a geocoding service to convert the input to coordinates
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;

                // Remove previous marker if it exists
                if (searchMarker) {
                    map.removeLayer(searchMarker);
                }

                // Add new marker with red icon and pan to the location
                searchMarker = L.marker([lat, lon], { icon: redIcon }).addTo(map);
                map.setView([lat, lon], 13);
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => {
            alert('Error searching for location. Please try again.');
        });
}



function resetMap() {
    // Reset map view to Winnipeg
    map.setView([49.8951, -97.1384], 13);

    // Remove search marker if it exists
    if (searchMarker) {
        map.removeLayer(searchMarker);
    }
}



/* Form */
document.addEventListener("DOMContentLoaded", function () {
    const carBrandSelect = document.getElementById('carBrand');
    const customCarBrandInput = document.getElementById('customCarBrand');

    carBrandSelect.addEventListener('change', function () {
        if (this.value === "other") {
            customCarBrandInput.style.display = "block";
        } else {
            customCarBrandInput.style.display = "none";
        }
    });
});

$(document).ready(function () {
    $("#dealershipForm").submit(function (e) {
        e.preventDefault();

        const formData = {
            fullName: $("#fullName").val(),
            phoneNumber: $("#phoneNumber").val(),
            carBrand: $("#carBrand").val(),
            customCarBrand: $("#customCarBrand").val(),
            dealershipAddress: $("#dealershipAddress").val()
        };

        $.post('https://electric.mammani.com/api/dealership', formData, function (response) {
            if (response.success) {
                $("#successMessageForm").text("Form submitted successfully!").css("color", "green");
            } else {
                $("#successMessageForm").text("Failed to submit the form. Please try again!").css("color", "red");
            }
        }).fail(function () {
            $("#successMessageForm").text("Failed to submit the form. Please try again!").css("color", "red");
        });
    });
});

