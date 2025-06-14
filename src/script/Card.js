import { userApi } from "./constants";

export default class Card {
  constructor(data, templateSelector, handleCardClick, onDeleteClick) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._onDeleteClick = onDeleteClick;
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
     this._cardElement.querySelector('.elements__like-counter').textContent = this._data.likes.length;

     return this._cardElement;
  }

  _handleLikeClick() {
    this._cardElement.querySelector('.elements__like-button').classList.toggle('elements__like-button_type_active');
    userApi.toggleLike(this._data._id, this._data.likes > 0);
  }

  _handleDeleteClick() {
    this._onDeleteClick(this._data._id, this._cardElement);
  }

  _handleImageClick() {
    this._handleCardClick(this._data);
    // const popupImage = document.querySelector('.popup_type_image');
    // popupImage.querySelector('.popup__image').src = this._data.link;
    // popupImage.querySelector('.popup__image').alt = this._data.name;
    // popupImage.querySelector('.popup__description').textContent = this._data.name;
    // openPopup(popupImage);
    // // const imagePopupHandler = new ImagePopupHandler();
    // // imagePopupHandler.open(this._data.name, this._data.link);
  }

}
