import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selector, submitHandler) {
    super(selector);
    this._submitHandler = submitHandler;
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formVals = {};
    this._inputList.forEach((input) => {
      this._formVals[input.name] = input.value;
    });
    return this._formVals;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
    });
  }

  close() {
    this._popup.querySelector('.form').reset();
    super.close();
  }
}
