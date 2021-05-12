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

// Function to Check Email Validate
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldId(input)} is Invalid`);
  }
}

// Function to Check if required field have data
function checkRequired(inputArray) {
  inputArray.forEach(function (element) {
    console.log(element.value);
    if (element.value === "") {
      showError(element, `${getFieldId(element)} is Required`);
    }
  });
}

// Function to get the id of the input field with proper case
function getFieldId(element) {
  return element.id.charAt(0).toUpperCase() + element.id.slice(1);
}

// Function to Check Length of input field
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldId(input)} need to be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldId(input)} need to be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Function to Check if password and confirm password doesn't match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Password & ${getFieldId(input2)} doesn't match`);
  } else {
    showSuccess(input2);
  }
}

// Event Listeners
// Create Event Listener for Submit Button
form.addEventListener("submit", function (e) {
  // Stop Page Reloading on Submit Btn
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(password, 6, 30);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
