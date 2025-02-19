let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let saveButton = popup.querySelector('.popup__submit');
let editButton = page.querySelector('.profile__edit-button');
let inputName = popup.querySelector('.popup__input_type_name');
let inputBio = popup.querySelector('.popup__input_type_bio');
let profile = page.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileBio = profile.querySelector('.profile__bio');

editButton.addEventListener('click', function() {
  popup.classList.add('popup__opened');
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent;
});

closeButton.addEventListener('click', closePopup);
saveButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;
  closePopup();
});

function closePopup() {
  popup.classList.remove('popup__opened');
}

