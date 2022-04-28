/*const addPlaceForm = document.forms.place;
const editUserForm = document.forms.users;*/


const showInputError = (object, formElement, inputElement, errorMessage) => {
    console.log('здесь');
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  console.log(errorElement);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(object.errorClass);
};

const hideInputError = (object, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.classList.remove(object.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (object, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(object, formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(object, formElement, inputElement);
    }
};

const setEventListeners = (object, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(object, formElement, inputElement);
        });
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {

     return !inputElement.validity.valid;   
    });
};


function enableValidation(object) {
 const formList = Array.from(document.querySelectorAll(object.formSelector));
 formList.forEach((formElement) => {
     formElement.addEventListener('submit', (evt) => {
         evt.preventDefault();
     })
     setEventListeners(object, formElement);
 });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});



//

/* addPlaceForm.addEventListener('submit', handleSubmit);
editUserForm.addEventListener('submit', handleSubmit); 

addPlaceForm.addEventListener('input', handleInput);
editUserForm.addEventListener('input', handleInput);*/
    //submitButtonSelector: '.popup__submit-button',
    //inactiveButtonClass: 'popup__submit_inactive',