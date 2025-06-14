/* ----------  imports  ---------- */
import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import PopupDelete from './PopupDelete.js';
import PopupWithAvatar from './PopupWithAvatar.js';
import UserInfo from './UserInfo.js';
import { userApi } from './constants.js';
import '../pages/index.css';


/* ----------  DOM refs ---------- */
const page              = document.querySelector('.page');

/* popups */
const popupEditSel      = '.popup_type_edit';
const popupNewSel       = '.popup_type_new-image';
const popupImgSel       = '.popup_type_image';
const popupDeleteSel    = '.popup_type_delete';
const popupAvaSel = '.popup_type_new-ava';

/* profile (user-info) */
const profileNameSel    = '.profile__name';
const profileBioSel     = '.profile__bio';
const profileAvatarSel  = '.profile__avatar';
const profileEditBtn    = page.querySelector('.profile__edit-button');
const profileAddBtn     = page.querySelector('.profile__add-button');
const profileAvatarEditBtn = document.querySelector('.profile__avatar-edit-button');

/* templates / container */
const cardTemplateSel   = '.element-template';
const elementsContainer = '.elements';

const { userInfo, initialCards } = await userApi.getAllData();

/* ----------  helpers / data ---------- */
// const initialCards = [
//   { name: 'Архыз',               link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' },
//   { name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' },
//   { name: 'Иваново',             link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' },
//   { name: 'Камчатка',            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' },
//   { name: 'Холмогорский район',  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' },
//   { name: 'Байкал',              link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' },
// ];

/* ----------  class instances ---------- */

/* user-info block */
const userInfoElem = new UserInfo(profileNameSel, profileBioSel, profileAvatarSel);
userInfoElem.setUserInfo({
  username: userInfo.name,  // Changed from 'name' to 'username'
  bio: userInfo.about,        // Changed from 'about' to 'bio'
});
userInfoElem.setUserAvatar(userInfo.avatar);

const popupWithAvatar = new PopupWithAvatar(
  popupAvaSel,
  (newAvatar) => {
    userInfoElem.setUserAvatar(newAvatar);
  }
);
popupWithAvatar.setEventListeners();

profileAvatarEditBtn.addEventListener('click', () => {
  popupWithAvatar.open();
});

const popupDelete = new PopupDelete(popupDeleteSel);
popupDelete.setEventListeners();
/* image popup */
const popupWithImage = new PopupWithImage(popupImgSel);
popupWithImage.setEventListeners();

/* edit-profile popup */
const popupEdit = new PopupWithForm(
  popupEditSel,
  ({ nickname, bio }) => {  // Changed from 'username' to 'nickname'
    userInfoElem.setUserInfo({ username: nickname, bio });  // Map nickname to username
    popupEdit.close();
  }
);
popupEdit.setEventListeners();

/* new-card popup */
const popupNewCard = new PopupWithForm(
  popupNewSel,
  ({ name, link }) => {
    userApi.createCard({ name, link });
    section.renderItems();
    // const cardEl = createCard({ name, link });
    // section.addItem(cardEl);
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
    ({ name, link }) => popupWithImage.open({ name, link }),
    (_id, cardElement) => popupDelete.open(_id, cardElement)
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
  const { username, bio } = userInfoElem.getUserInfo();
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
