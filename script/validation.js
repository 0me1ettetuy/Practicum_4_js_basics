function validateForms() {
  const formsList = document.querySelectorAll('.form');
  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputList = formElement.querySelectorAll('.popup__input');
    toggleButton(formElement, inputList);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        toggleButton(formElement, inputList);
        validateInput(formElement, inputElement);
      });
    });
  });
}

function showError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
}

function hideError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
}

function validateInput(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
}

function toggleButton(formElement, inputList) {
  const buttonElement = formElement.querySelector('.popup__submit');
  if (hasInvalidField(formElement, inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__submit_inactive');
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('popup__submit_inactive');
  }
}

function hasInvalidField(formElement, inputList) {
  return Array.from(inputList).some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

validateForms();
