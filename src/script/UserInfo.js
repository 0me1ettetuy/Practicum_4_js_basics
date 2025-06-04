export default class UserInfo {
  constructor(usernameSelector, bioSelector) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._bioElement = document.querySelector(bioSelector);
  }

  getUserInfo() {
    return {
      username: this._usernameElement.textContent,
      bio: this._bioElement.textContent
    };
  }

  setUserInfo({ username, bio }) {
    this._usernameElement.textContent = username;
    this._bioElement.textContent = bio;
  }
}
