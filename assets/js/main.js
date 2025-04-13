// Function to load HTML content into a specific element
function loadHTML(elementId, file, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback(); // Call the callback after loading the content
    });
}

window.onload = function () {
  loadHTML("header", "includes/header.html");
  loadHTML("footer", "includes/footer.html", function () {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  });
};

// JavaScript to handle the hamburger menu toggle
function toggleNavigation() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active"); // Using classList.toggle for better performance
}
