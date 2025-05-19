import { ImagePopupHandler } from './PopupHandler.js';

export default class Card {
  constructor(data, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    return template;
  }

  _setEventListeners() {
    this._cardElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('elements__like-button')) {
        this._handleLikeClick();
      } else if (evt.target.classList.contains('elements__delete-button')) {
        this._handleDeleteClick();
      } else if (evt.target.classList.contains('elements__image')) {
        this._handleImageClick();
      }
    });
  }

  generate() {
     this._cardElement = this._getTemplate();
     this._setEventListeners();
     this._cardElement.querySelector('.elements__name').textContent = this._data.name;
     this._cardElement.querySelector('.elements__image').src = this._data.link;
     this._cardElement.querySelector('.elements__image').alt = this._data.name;

     return this._cardElement;
  }

  _handleLikeClick() {
    this._cardElement.querySelector('.elements__like-button').classList.toggle('elements__like-button_type_active');
  }

  _handleDeleteClick() {
    this._cardElement.remove();
  }

  _handleImageClick() {
    // const popupImage = document.querySelector('.popup_type_image');
    // popupImage.querySelector('.popup__image').src = this._data.link;
    // popupImage.querySelector('.popup__image').alt = this._data.name;
    // popupImage.querySelector('.popup__description').textContent = this._data.name;
    // openPopup(popupImage);
    const imagePopupHandler = new ImagePopupHandler();
    imagePopupHandler.open(this._data.name, this._data.link);
  }

}
