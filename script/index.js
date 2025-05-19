const page = document.querySelector('.page');
const popupEdit = page.querySelector('.popup_type_edit');
const popupNewImage = page.querySelector('.popup_type_new-image');
const popupImage = page.querySelector('.popup_type_image');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const popupNewImageCloseButton = popupNewImage.querySelector('.popup__close');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');
const popupEditSaveButton = popupEdit.querySelector('.popup__submit');
const popupEditInputName = popupEdit.querySelector('.popup__input_type_name');
const popupEditInputBio = popupEdit.querySelector('.popup__input_type_bio');
const popupNewImageSaveButton = popupNewImage.querySelector('.popup__submit');
const popupNewImageInputName = popupNewImage.querySelector('.popup__input_type_name');
const popupNewImageInputLink = popupNewImage.querySelector('.popup__input_type_bio');

const profile = page.querySelector('.profile');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileAddButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileBio = profile.querySelector('.profile__bio');

const elementTemplate = page.querySelector('.element-template').content;
const elements = page.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function closePopup(popup) {
  popup.classList.remove('popup__opened');
}

function openPopup(popup) {
  console.log(popup)
  popup.classList.add('popup__opened');
}

profileAddButton.addEventListener('click', () => openPopup(popupNewImage));
popupNewImageCloseButton.addEventListener('click', () => {
  popupNewImageInputName.value = '';
  popupNewImageInputLink.value = '';
  closePopup(popupNewImage);
});

profileEditButton.addEventListener('click', function() {
  openPopup(popupEdit);
  popupEditInputName.value = profileName.textContent;
  popupEditInputBio.value = profileBio.textContent;
});
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));

popupEditSaveButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditInputName.value;
  profileBio.textContent = popupEditInputBio.value;
  closePopup(popupEdit);
});

popupNewImageSaveButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  const newElement = {
    name: popupNewImageInputName.value,
    link: popupNewImageInputLink.value
  }
  popupNewImageInputName.value = '';
  popupNewImageInputLink.value = '';
  const card = new Card(newElement, '.element-template');
  const cardElement = card.generate();
  elements.prepend(cardElement);
  closePopup(popupNewImage);
});

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));

const popupList = page.querySelectorAll('.popup');
popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__wrap')) {
      closePopup(popup);
    }
  });
  page.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
});

//
class Card {
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
    const popupImage = document.querySelector('.popup_type_image');
    popupImage.querySelector('.popup__image').src = this._data.link;
    popupImage.querySelector('.popup__image').alt = this._data.name;
    popupImage.querySelector('.popup__description').textContent = this._data.name;
    openPopup(popupImage);
  }

}

function renderPage() {
  initialCards.forEach((data) => {
    const card = new Card (data, '.element-template');
    const cardElement = card.generate();
    document.querySelector('.elements').append(cardElement);
  });
}

renderPage();
