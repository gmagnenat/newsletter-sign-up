const formScreen = document.getElementById("form-screen");
const form = document.getElementById("form");
const displayEmail = document.getElementById("display-email");
const inputEmail = document.getElementById("email");
const errors = document.getElementById("emailError");
const successScreen = document.getElementById("success-screen");
const successBtn = document.getElementById("success-btn");
const loading = document.getElementById("loading-message");

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
    inputEmail.focus();
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
  successScreen.showModal();
  // add overflow hidden on body
  document.body.style.overflow = "hidden";
}

// Function to show the form screen
function showFormScreen() {
  // add overflow visible on body
  document.body.style.overflow = "visible";
  form.reset();
  successScreen.close();
}

// Function to process the form data
function processFormData(e) {
  e.preventDefault();
  validateForm();
  // Submit Data if Valid
  if (isValid) {
    storeFormData();
    loading.innerHTML = "Loading...";
    displayEmail.innerHTML = userEmail;
    showSuccessScreen();
    loading.innerHTML = "";
  }
}

// Event listener to show the success screen when the form is submitted
formScreen.addEventListener("submit", processFormData);

// Event listener go back to the form screen when the success screen message is dismissed
successBtn.addEventListener("click", function () {
  showFormScreen();

  // close modal
  successScreen.close();
});
