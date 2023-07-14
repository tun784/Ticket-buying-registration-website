// Get the form and input elements
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const movieSelect = document.querySelector('#movie');
const quantityInput = document.querySelector('#quantity');
const submitBtn = document.querySelector('input[type="submit"]');

// Add event listener to the form
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting
    validateForm(); // Call the validation function
});

// Validation function
function validateForm() {
    // Get the values from the form inputs
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const movieValue = movieSelect.value;
    const quantityValue = quantityInput.value.trim();

    // Validate the name input
    if (nameValue === '') {
        showError(nameInput, 'Name is required');
    } else if (nameValue.length < 2) {
        showError(nameInput, 'Name must be at least 2 characters');
    } else {
        showSuccess(nameInput);
    }

    // Validate the email input
    if (emailValue === '') {
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Email is not valid');
    } else {
        showSuccess(emailInput);
    }

    // Validate the movie select
    if (movieValue === '') {
        showError(movieSelect, 'Please select a movie');
    } else {
        showSuccess(movieSelect);
    }

    // Validate the quantity input
    if (quantityValue === '') {
        showError(quantityInput, 'Quantity is required');
    } else if (isNaN(quantityValue)) {
        showError(quantityInput, 'Quantity must be a number');
    } else if (quantityValue <= 0) {
        showError(quantityInput, 'Quantity must be greater than 0');
    } else {
        showSuccess(quantityInput);
    }
}

// Show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.remove('success');
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

// Check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}