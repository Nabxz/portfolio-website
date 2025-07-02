



// Function to get query parameters from URL
function getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('planet');
}

// On page load, fetch the planet details
document.addEventListener('DOMContentLoaded', function () {
    const planetName = getQueryParams();
    if (planetName) {
        document.title = 'Galaxy - ' + planetName; 
        fetchPlanetDetails(planetName); // Function to fetch planet details
    }
});

// Function to fetch planet details
function fetchPlanetDetails(planetName) {
    // Use the server-side endpoint with the correct base URL and port
    const apiURL = `https://galaxy.mammani.com/api/planet-details?name=${planetName}`;

    $.ajax({
        method: 'GET',
        url: apiURL,
        contentType: 'application/json',
        success: function (result) {
            if (result.length > 0) {
                displayPlanetDetails(result[0]); // Function to display planet details
            } else {
                console.error('No details found for the specified planet.');
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error fetching planet details:', jqXHR.responseText);
        }
    });
}


// Function to display planet details
function displayPlanetDetails(planet) {
    const container = document.createElement('div');

    // Assuming the API returns these fields; adjust according to actual API response
    const detailsHtml = `
        
        <div class="planet-heading">
            <h1>${planet.name}</h1>
        </div>

        <div class="planet-details-box">
            <h3>Planetary Characteristics</h3>
            <div class="box-data">
                <p><strong>Mass:</strong><br> ${planet.mass || 'Unknown'} Jupiter masses</p>
                <p><strong>Orbital Period:</strong><br> ${planet.period || 'Unknown'} Earth days</p>
                <p><strong>Semi-major Axis:</strong><br> ${planet.semi_major_axis || 'Unknown'} AU</p>
                <p><strong>Surface Temperature:</strong><br> ${planet.temperature || 'Unknown'} K</p>
            </div>
        </div>

        <div class="planet-details-box">
            <h3>Distance Metrics</h3>
            <div class="box-data">
                <p><strong>Distance:</strong><br> ${planet.distance_light_year || 'Unknown'} light years away from Earth</p>
            </div>
        </div>

        <div class="planet-details-box">
            <h3>Host Star Details</h3>
            <div class="box-data">
                <p><strong>Host Star Mass:</strong><br> ${planet.host_star_mass || 'Unknown'}</p>
                <p><strong>Host Star Temperature:</strong><br> ${planet.host_star_temperature || 'Unknown'} K</p>
            </div>
        </div>

        
    `;

    container.innerHTML = detailsHtml;

    // Append the details to the body or a specific content div on your page
    document.getElementById('planet-details').innerHTML = detailsHtml;

}



// SEARCH BAR


// Event listener for search input
document.querySelector('.planet-search-input').addEventListener('input', function (e) {
    const userInput = e.target.value;

    // Check if user input is not empty
    if (userInput.length > 0) {
        // Add the 'search-active' class when user starts typing
        document.querySelector('.planet-search-container').classList.add('planet-search-active');
        searchPlanets(userInput); // Function to search planets
    } else {
        // Remove the 'search-active' class when input is empty
        document.querySelector('.planet-search-container').classList.remove('planet-search-active');
    }
});

// Function to search planets using the API
function searchPlanets(query) {
    // Update the URL to point to your server's endpoint
    const serverApiURL = 'https://galaxy.mammani.com/api/planets/search?name=' + encodeURIComponent(query);


    $.ajax({
        method: 'GET',
        url: serverApiURL,
        contentType: 'application/json',
        success: function (result) {
            displaySearchResults(result); // Function to display results
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

// Function to display search results
function displaySearchResults(results) {
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'planet-search-results';

    results.forEach(planet => {
        const planetElement = document.createElement('div');
        planetElement.textContent = planet.name;
        planetElement.addEventListener('click', function () {
            window.location.href = `./planet-viewer-page.html?planet=${planet.name}`;
        });
        resultsContainer.appendChild(planetElement);
    });

    // Append results container below the search bar or replace the existing one
    const oldResults = document.getElementById('planet-search-results');
    if (oldResults) {
        document.querySelector('.planet-search-container').replaceChild(resultsContainer, oldResults);
    } else {
        document.querySelector('.planet-search-container').appendChild(resultsContainer);
    }

    if (results.length === 0) {
        // If there are no results, remove the 'search-active' class
        document.querySelector('.planet-search-container').classList.remove('planet-search-active');
    }
}


function hideSearchResults() {
    document.querySelector('.planet-search-container').classList.remove('planet-search-active');
    const resultsContainer = document.getElementById('planet-search-results');
    if (resultsContainer) {
        resultsContainer.remove();
    }
}

// Add event listener to hide search results when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.planet-search-container')) {
        hideSearchResults();
    }
});

document.querySelector('.back-button button').addEventListener('click', function() {
    window.history.back(); // Use the browser's history stack to go back
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the back-to-top link
    var backToTopButton = document.querySelector('.back-to-top a');

    // Listen for a click event on the back-to-top link
    backToTopButton.addEventListener('click', function(e) {
        // Prevent the default anchor action
        e.preventDefault();

        // Smoothly scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// ===============================/ SEARCH BAR /===


// SUCCESS POPUP & NEWSLETTER

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    var email = document.getElementById('newsletter-email').value;
    if (email) { // Simple validation here, you can add more
      showPopupMessage("Confirmation Email Sent To " + email, false);
    } else {
      showPopupMessage("Please enter a valid email address.", true);
    }
  });
  
  function showPopupMessage(message, isError) {
    // Create the popup if it doesn't exist
    var popup = document.getElementById('popup-message');
    if (!popup) {
      popup = document.createElement('div');
      popup.id = 'popup-message';
      document.body.appendChild(popup);
    }
  
    // Set the message and styles
    popup.textContent = message;
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.right = '20px';
    popup.style.backgroundColor = isError ? 'red' : 'green';
    popup.style.color = 'white';
    popup.style.padding = '10px';
    popup.style.paddingLeft = '50px';
    popup.style.textAlign = 'right';
    popup.style.borderRadius = '5px';
    popup.style.zIndex = '1000';
    popup.style.display = 'block';
  
    // Remove the popup after 5 seconds
    setTimeout(function () {
      popup.style.display = 'none';
    }, 5000);
  }
  
  // ===============================/ SUCCESS POPUP & NEWSLETTER /===