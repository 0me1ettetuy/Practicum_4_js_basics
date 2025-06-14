import { userApi } from './constants.js';

export default class UserInfo {
  constructor(usernameSelector, bioSelector, avatarSelector) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._bioElement = document.querySelector(bioSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      username: this._usernameElement.textContent,
      bio: this._bioElement.textContent,
      avatar: this._avatarElement.src
    };
  }

  setUserInfo({ username, bio}) {
    userApi.updateUserInfo({ name: username, about: bio });
    this._usernameElement.textContent = username;
    this._bioElement.textContent = bio;
  }

  setUserAvatar(avatarUrl) {
    this._avatarElement.src = avatarUrl;
  }
}
