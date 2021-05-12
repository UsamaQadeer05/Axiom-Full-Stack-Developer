// Retrieving HTML elements from DOM
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Create Event Listener for Submit Button
form.addEventListener("submit", function (e) {
  // Stop Page Reloading on Submit Btn
  e.preventDefault();
  console.log(username.value);
  console.log(email.value);
  console.log(password.value);
  console.log(password2.value);
});
