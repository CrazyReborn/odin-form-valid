//Inputs
const email = document.querySelector('#mail');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip-code');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const submit = document.querySelector('button[type="submit"]');

//Input Errors
const emailErr = document.querySelector('#mail + span.error');
const countryErr = document.querySelector('#country + span.error');
const zipCodeErr = document.querySelector('#zip-code + span.error');
const passwordErr = document.querySelector('#password + span.error');
const passwordConfirmErr = document.querySelector('#password-confirm + span.error');

//All inputs and all errors
const inputs = [email, country, zipCode, password];
const inputsErr = [emailErr, countryErr, zipCodeErr, passwordErr];

//Show Error
function showError (input, inputErr) {
    if(input.validity.tooShort) {
        inputErr.textContent = `Input has to be at least ${input.minLength} characters.`;
    }
    else if(input.validity.tooLong) {
        inputErr.textContent = `Input has to at maximum ${input.maxLength} characters.`;
    }
    else if(input.validity.typeMismatch) {
        inputErr.textContent = `Has to be ${input.type}`;
    }
    else if (input.validity.valueMissing) {
        inputErr.textContent = `Value is missing.`;
    }

}

//On form submit
submit.addEventListener('click', e=> {
    inputs.forEach((input, index) => {
        if (!input.validity.valid) {
            showError(input, inputsErr[index]);
        }
    })
    e.preventDefault();
})