// import Card from './Card.js';
// import FormValidator from './FormValidator.js';
// import '../pages/index.css';

// const page = document.querySelector('.page');
// const popupEdit = page.querySelector('.popup_type_edit');
// const popupNewImage = page.querySelector('.popup_type_new-image');
// const popupImage = page.querySelector('.popup_type_image');
// const popupImageCloseButton = popupImage.querySelector('.popup__close');
// const popupNewImageCloseButton = popupNewImage.querySelector('.popup__close');
// const popupEditCloseButton = popupEdit.querySelector('.popup__close');
// const popupEditSaveButton = popupEdit.querySelector('.popup__submit');
// const popupEditInputName = popupEdit.querySelector('.popup__input_type_name');
// const popupEditInputBio = popupEdit.querySelector('.popup__input_type_bio');
// const popupNewImageSaveButton = popupNewImage.querySelector('.popup__submit');
// const popupNewImageInputName = popupNewImage.querySelector('.popup__input_type_name');
// const popupNewImageInputLink = popupNewImage.querySelector('.popup__input_type_bio');

// const profile = page.querySelector('.profile');
// const profileEditButton = page.querySelector('.profile__edit-button');
// const profileAddButton = profile.querySelector('.profile__add-button');
// const profileName = profile.querySelector('.profile__name');
// const profileBio = profile.querySelector('.profile__bio');

// const elementTemplate = page.querySelector('.element-template').content;
// const elements = page.querySelector('.elements');

// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

// function closePopup(popup) {
//   popup.classList.remove('popup__opened');
// }

// function openPopup(popup) {
//   popup.classList.add('popup__opened');
// }

// profileAddButton.addEventListener('click', () => openPopup(popupNewImage));

// popupNewImageCloseButton.addEventListener('click', () => {
//   popupNewImageInputName.value = '';
//   popupNewImageInputLink.value = '';
//   closePopup(popupNewImage);
// });

// profileEditButton.addEventListener('click', function() {
//   openPopup(popupEdit);
//   popupEditInputName.value = profileName.textContent;
//   popupEditInputBio.value = profileBio.textContent;
// });

// popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));

// popupEditSaveButton.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   profileName.textContent = popupEditInputName.value;
//   profileBio.textContent = popupEditInputBio.value;
//   closePopup(popupEdit);
// });

// popupNewImageSaveButton.addEventListener('click', (evt) => {
//   evt.preventDefault()
//   const newElement = {
//     name: popupNewImageInputName.value,
//     link: popupNewImageInputLink.value
//   }
//   popupNewImageInputName.value = '';
//   popupNewImageInputLink.value = '';
//   const card = new Card(newElement, '.element-template');
//   const cardElement = card.generate();
//   elements.prepend(cardElement);
//   closePopup(popupNewImage);
// });

// popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));

// const popupList = page.querySelectorAll('.popup');
// popupList.forEach((popup) => {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup__wrap')) {
//       closePopup(popup);
//     }
//   });
//   page.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Escape') {
//       closePopup(popup);
//     }
//   });
// });


// function renderPage() {
//   initialCards.forEach((data) => {
//     const card = new Card (data, '.element-template');
//     const cardElement = card.generate();
//     document.querySelector('.elements').append(cardElement);
//   });
// }

// renderPage();

// const formsList = [
//   {
//     formSelector: '.form__edit',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__submit',
//     inactiveButtonClass: 'popup__submit_inactive',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   },
//   {
//     formSelector: '.form__new-image',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__submit',
//     inactiveButtonClass: 'popup__submit_inactive',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   },
// ];

// function validateForms(formsList) {
//   formsList.forEach((formData) => {
//     const formValidator = new FormValidator(formData);
//     formValidator.enableValidation();
//   });
// }

// validateForms(formsList);


/* ----------  imports  ---------- */
import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import '../pages/index.css';

/* ----------  DOM refs ---------- */
const page              = document.querySelector('.page');

/* popups */
const popupEditSel      = '.popup_type_edit';
const popupNewSel       = '.popup_type_new-image';
const popupImgSel       = '.popup_type_image';

/* profile (user-info) */
const profileNameSel    = '.profile__name';
const profileBioSel     = '.profile__bio';
const profileEditBtn    = page.querySelector('.profile__edit-button');
const profileAddBtn     = page.querySelector('.profile__add-button');

/* templates / container */
const cardTemplateSel   = '.element-template';
const elementsContainer = '.elements';

/* ----------  helpers / data ---------- */
const initialCards = [
  { name: 'Архыз',               link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' },
  { name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' },
  { name: 'Иваново',             link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' },
  { name: 'Камчатка',            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' },
  { name: 'Холмогорский район',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' },
  { name: 'Байкал',              link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' },
];

/* ----------  class instances ---------- */

/* user-info block */
const userInfo = new UserInfo(profileNameSel, profileBioSel);

/* image popup */
const popupWithImage = new PopupWithImage(popupImgSel);
popupWithImage.setEventListeners();

/* edit-profile popup */
const popupEdit = new PopupWithForm(
  popupEditSel,
  ({ nickname, bio }) => {  // Changed from 'username' to 'nickname'
    userInfo.setUserInfo({ username: nickname, bio });  // Map nickname to username
    popupEdit.close();
  }
);
popupEdit.setEventListeners();

/* new-card popup */
const popupNewCard = new PopupWithForm(
  popupNewSel,
  ({ nickname, bio }) => {
    const cardEl = createCard({ name: nickname, link: bio });
    section.addItem(cardEl);
    popupNewCard.close();
  }
);
popupNewCard.setEventListeners();

/* section to render cards */
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {const card = new Card(
    item,
    cardTemplateSel,
    ({ name, link }) => popupWithImage.open({ name, link })
  );
  return card.generate();},
  },
  elementsContainer
);
section.renderItems();

/* ----------  card factory ---------- */
function createCard(data) {
  const card = new Card(
    data,
    cardTemplateSel,
    ({ name, link }) => popupWithImage.open({ name, link })
  );
  return card.generate();
}

/* ----------  event bindings ---------- */
profileEditBtn.addEventListener('click', () => {
  const { username, bio } = userInfo.getUserInfo();
  document.querySelector(`${popupEditSel} .popup__input_type_name`).value = username;
  document.querySelector(`${popupEditSel} .popup__input_type_bio`).value = bio;
  popupEdit.open();
});

profileAddBtn.addEventListener('click', () => popupNewCard.open());

/* ----------  form validation ---------- */
const validationCfg = {
  inputSelector:        '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass:  'popup__submit_inactive',
  inputErrorClass:      'popup__input_type_error',
  errorClass:           'popup__error_visible',
};

['.form__edit', '.form__new-image'].forEach((formSelector) => {
  new FormValidator({ formSelector, ...validationCfg }).enableValidation();
});
