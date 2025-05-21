// export class PopupHandler {
//   constructor() {

//   }

//   open() {
//     this._popupElement.classList.add('popup__opened');
//   }

//   close() {
//     this._popupElement.classList.remove('popup__opened');
//   }

//   _addEventListnerClose() {
//     this._popupElement.querySelector('.popup__close').addEventListener('click', () => this.close());
//   }
// }

// export class EditPopupHandler extends PopupHandler {
//   constructor(popupSelector) {
//     super(popupSelector);
//   }
// }

// export class NewImagePopupHandler extends PopupHandler {
//   constructor(popupSelector) {
//     super(popupSelector);
//   }

//   _addEventListnerOpen() {

//   }

//   handleNewImagePopup() {
//     super._addEventListnerClose();
//   }

//   open() {
//     super.open();
//   }
// }

// export class ImagePopupHandler extends PopupHandler {
//   constructor(popupSelector) {
//     this._popupElement = document.querySelector('.popup_type_image');
//   }

//   open(name, link) {
//     this._popupElement.querySelector('.popup__image').src = link;
//     this._popupElement.querySelector('.popup__image').alt = name;
//     this._popupElement.querySelector('.popup__description').textContent = name;
//     super.open();
//   }

//   handleImagePopup() {
//     super._addEventListnerClose();
//   }
// }
