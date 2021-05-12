// Retrieving HTML elements from DOM
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Create Event Listener for Submit Button
form.addEventListener("submit", function (e) {
  console.log("submitted");
});
