import Popup from './Popup.js';
import { userApi } from './constants.js';

export default class PopupDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  open(cardId, cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', async (evt) => {
      evt.preventDefault();

      try {
        await userApi.removeCard(this._cardId);
        this._cardElement.remove();
        this.close();
      } catch (err) {
        console.error('Failed to delete card:', err);
      }
    });
  }
}
