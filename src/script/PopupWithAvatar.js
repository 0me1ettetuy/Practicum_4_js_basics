import Popup from './Popup.js';
import { userApi } from './constants.js';

export default class PopupWithAvatar extends Popup {
  constructor(selector, setAvatarCallback) {
    super(selector);
    this._form = this._popup.querySelector('.popup__form');
    this._input = this._popup.querySelector('.popup__input_type_ava');
    this._setAvatarCallback = setAvatarCallback;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', async (evt) => {
      evt.preventDefault();
      const url = this._input.value;

      try {
        const user = await userApi.updateAvatar({ avatar: url });
        this._setAvatarCallback(user.avatar);
        this._form.reset();
        this.close();
      } catch (err) {
        console.error('Failed to update avatar:', err);
      }
    });
  }
}
