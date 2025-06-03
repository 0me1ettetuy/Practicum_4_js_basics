export default class Popup {
  coonstructor(selector) {
    this._popup = document.querySelector(selector);
  }
  open() {
    this._popup.classList.add('popup__opened');
  }

  close() {
    this._popup.classList.remove('popup__opened');
  }

  _handleEscClose() {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        this.close();
      }
    });
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close') || evt.target.calssList.cotains('popup__wrap')){
        this.close();
      }
    });
  }
}
