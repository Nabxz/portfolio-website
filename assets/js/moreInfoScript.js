// BACK BUTTON
// Event listener for the back button
document.getElementById('backButton').addEventListener('click', function () {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '../index.html#portfolio'; // fallback route
  }
});

// Event listener for the "Back to Top" button
document.getElementById('backToTopButton').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// ===============================/ BACK BUTTON /===

// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the images and bind them with a click event listener
var images = document.querySelectorAll('.project-images-container img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ===============================/ MODAL /===