let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');
let editButton = page.querySelector('.profile__edit-button');

editButton.addEventListener('click', function() {
  popup.classList.add('popup__opened');
});

closeButton.addEventListener('click', function() {
  popup.classList.remove('popup__opened');
});
