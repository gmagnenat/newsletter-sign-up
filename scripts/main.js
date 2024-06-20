const formScreen = document.getElementById("form-screen");
const form = document.getElementById("form");
const displayEmail = document.getElementById("display-email");
const inputEmail = document.getElementById("email");
const errors = document.getElementById("errors");
const successScreen = document.getElementById("success-screen");
const successBtn = document.getElementById("success-btn");

let isValid = false;
let userEmail = "";

// Function to validate the form
function validateForm() {
  isValid = form.checkValidity();

  // validate email address using regex
  if (isValid) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    isValid = emailRegex.test(inputEmail.value);
  }

  // Show error message if email is invalid
  if (!isValid) {
    showError();
  }
}

function storeFormData() {
  const user = {
    email: inputEmail.value,
  };

  userEmail = user.email;
}

// Function to show error message and highlight the input field
function showError() {
  errors.innerHTML = "Valid email required";
  inputEmail.classList.add("error");
}

// Function to show the success screen
function showSuccessScreen() {
  formScreen.style.display = "none";
  successScreen.style.display = "flex";
}

// Function to show the form screen
function showFormScreen() {
  formScreen.style.display = "flex";
  successScreen.style.display = "none";
}

// Function to process the form data
function processFormData(e) {
  e.preventDefault();
  validateForm();
  // Submit Data if Valid
  if (isValid) {
    storeFormData();
    displayEmail.innerHTML = userEmail;
    showSuccessScreen();
  }
}

// Event listener to show the success screen when the form is submitted
formScreen.addEventListener("submit", processFormData);

// Event listener go back to the form screen when the success screen message is dismissed
successBtn.addEventListener("click", function () {
  showFormScreen();
});

// Close success screen when escape key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    showFormScreen();
  }
});
