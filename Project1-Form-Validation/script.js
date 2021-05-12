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

// Function to Update class for success
function showSuccess(input) {
  // Get the parent element of the input field(.form-control)
  const formControl = input.parentElement;
  // Override the class - add success
  formControl.className = "form-control success";
}

// Event Listeners
// Create Event Listener for Submit Button
form.addEventListener("submit", function (e) {
  // Stop Page Reloading on Submit Btn
  e.preventDefault();

  // Check to see if fields meet required field requirements
  // Check if Username input is empty
  if (username.value === "") {
    showError(username, "Username is Required");
  } else {
    showSuccess(username);
  }

  // Check if Email input is empty
  if (email.value === "") {
    showError(email, "Email is Required");
  } else {
    showSuccess(email);
  }

  // Check if Password input is empty
  if (password.value === "") {
    showError(password, "Password is Required");
  } else {
    showSuccess(password);
  }

  // Check if Password2 input is empty
  if (password2.value === "") {
    showError(password2, "Confirm password is Required");
  } else {
    showSuccess(password2);
  }
});
