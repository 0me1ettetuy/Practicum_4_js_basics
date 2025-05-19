// function validateForms() {
//   const formsList = document.querySelectorAll('.form');
//   formsList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });

//     const inputList = formElement.querySelectorAll('.popup__input');
//     toggleButton(formElement, inputList);
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
//         toggleButton(formElement, inputList);
//         validateInput(formElement, inputElement);
//       });
//     });
//   });
// }

// function showError(formElement, inputElement, errorMessage) {
//   const errorElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
//   inputElement.classList.add('popup__input_type_error');
//   errorElement.textContent = errorMessage;
// }

// function hideError(formElement, inputElement) {
//   const errorElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
//   inputElement.classList.remove('popup__input_type_error');
//   errorElement.textContent = '';
// }

// function validateInput(formElement, inputElement) {
//   if (!inputElement.validity.valid) {
//     showError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideError(formElement, inputElement);
//   }
// }

// function toggleButton(formElement, inputList) {
//   const buttonElement = formElement.querySelector('.popup__submit');
//   if (hasInvalidField(formElement, inputList)) {
//     buttonElement.setAttribute('disabled', true);
//     buttonElement.classList.add('popup__submit_inactive');
//   } else {
//     buttonElement.removeAttribute('disabled');
//     buttonElement.classList.remove('popup__submit_inactive');
//   }
// }

// function hasInvalidField(formElement, inputList) {
//   return Array.from(inputList).some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// }

// validateForms();

export default class FormValidator {
  constructor(formData) {
    this._formSelector = formData.formSelector;
    this._inputSelector = formData.inputSelector;
    this._submitButtonSelector = formData.submitButtonSelector;
    this._inactiveButtonClass = formData.inactiveButtonClass;
    this._inputErrorClass = formData.inputErrorClass;
    this._errorClass = formData.errorClass;
    this._formElement = document.querySelector(this._formSelector);
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const inputList = formElement.querySelectorAll(this._inputSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._validateInput(inputElement);
        this._toggleButton(inputList);
      });
    });
  }

  _validateInput(inputElement) {
    if (!inputElement.validity.valid) {
      _showError(inputElement, inputElement.validationMessage);
    } else {
      _hideError(inputElement);
    }
  }

  _hideError(inputElement) {
    const errorElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  _showError(inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _toggleButton(inputList) {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    if (hasInvalidField(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _hasInvalidField(inputList) {
    return Array.from(inputList).some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
