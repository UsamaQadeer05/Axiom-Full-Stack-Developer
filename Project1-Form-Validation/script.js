// Retrieving HTML elements from DOM
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Function to Update class and error message
function showError(input, message) {
  // Get the parent element of the input field(.form-control)
  const formControl = input.parentElement;
  // Override the class - add error
  formControl.className = "form-control error";
  // Get the small element for the error message
  const small = formControl.querySelector("small");
  // Override the text for small element using the input message
  small.innerText = message;
}

// Event Listeners
// Create Event Listener for Submit Button
form.addEventListener("submit", function (e) {
  // Stop Page Reloading on Submit Btn
  e.preventDefault();

  // Check if Username input is empty
  if (username.value === "") {
    showError(username, "Username is Required");
  }
});
