export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseURL = baseUrl;
    this._headers = headers;
  }

  async getUserInfo() {
    try {
      const response = await fetch(`${this._baseURL}/users/me`, {
        headers: {
          authorization: this._headers.authorization,
          'Content-Type': this._headers['Content-Type']
        },
      });
      const json = await (response.ok ? response.json() : Promise.reject(`Error: ${response.status}`));
      return json;
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      throw error;
    }
  }

  async getInitialCards() {
    try {
      const response = await fetch(`${this._baseURL}/cards`, {
        headers: {
          authorization: this._headers.authorization,
          'Content-Type': this._headers['Content-Type']
        },
      });
      const json = await (response.ok ? response.json() : Promise.reject(`Error: ${response.status}`));
      return json;
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      throw error;
    }
  }

  async editUserInfo({ name, about }) {
    try {
      const response = await fetch(`${this._baseURL}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._headers.authorization,
          'Content-Type': this._headers['Content-Type']
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      });
      const json = await (response.ok ? response.json() : Promise.reject(`Error: ${response.status}`));
      return json;
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      throw error;
    }
  }

  async addNewCard({ name, link }) {
    try {
      const response = await fetch(`${this._baseURL}/cards`, {
        method: 'POST',
        headers: {
          authorization: this._headers.authorization,
          'Content-Type': this._headers['Content-Type']
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      });
      const json = await (response.ok ? response.json() : Promise.reject(`Error: ${response.status}`));
      return json;
    } catch (error) {
      console.error('Failed to add new card:', error);
      throw error;
    }
  }

  async deleteCard(cardId) {
    try {
      const response = await fetch(`${this._baseURL}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._headers.authorization,
          'Content-Type': this._headers['Content-Type']
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to delete card:', error);
      throw error;
    }
  }

  async toggleLike(cardId, isLiked) {
    try {
      const method = isLiked ? 'DELETE' : 'PUT';
      const response = await fetch(`${this._baseURL}/cards/likes/${cardId}`, {
        method: method,
        headers: {
          authorization: this._headers.authorization,
          'Content-Type': this._headers['Content-Type']
        },
      });
      const json = await (response.ok ? response.json() : Promise.reject(`Error: ${response.status}`));
      return json;
    } catch (error) {
      console.error('Failed to toggle like:', error);
      throw error;
    }
  }

  async changeAvatar({ avatar }) {
    try {
      const response = await fetch(`${this._baseURL}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._headers.authorization,
          'Content-Type': this._headers['Content-Type']
        },
        body: JSON.stringify({
          avatar: avatar
        })
      });
      const json = await (response.ok ? response.json() : Promise.reject(`Error: ${response.status}`));
      return json;
    } catch (error) {
      console.error('Failed to change avatar:', error);
      throw error;
    }
  }

  async getAllData() {
    try {
      const [userInfo, initialCards] = await Promise.all([
        this.getUserInfo(),
        this.getInitialCards()
      ]);
      return { userInfo, initialCards };
    } catch (error) {
      console.error('Failed to fetch all data:', error);
      throw error;
    }
  }

  async updateUserInfo({ name, about }) {
    try {
      const user = await this.editUserInfo({ name, about });
      return user;
    } catch (error) {
      console.error('Failed to update user info:', error);
      throw error;
    }
  }

  async createCard({ name, link }) {
    try {
      const card = await this.addNewCard({ name, link });
      return card;
    } catch (error) {
      console.error('Failed to create card:', error);
      throw error;
    }
  }

  async removeCard(cardId) {
    try {
      await this.deleteCard(cardId);
    } catch (error) {
      console.error('Failed to remove card:', error);
      throw error;
    }
  }

  async likeCard(cardId) {
    try {
      const card = await this.toggleLike(cardId, false);
      return card;
    } catch (error) {
      console.error('Failed to like card:', error);
      throw error;
    }
  }

  async unlikeCard(cardId) {
    try {
      const card = await this.toggleLike(cardId, true);
      return card;
    } catch (error) {
      console.error('Failed to unlike card:', error);
      throw error;
    }
  }

  async updateAvatar({ avatar }) {
    try {
      const user = await this.changeAvatar({ avatar });
      return user;
    } catch (error) {
      console.error('Failed to update avatar:', error);
      throw error;
    }
  }
}
