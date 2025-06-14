import Api from './API.js';
/* user session */
export const userApi = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
    headers: {
        authorization: '8b08d836-44f0-4512-90c9-f96fba78716b',
        'Content-Type': 'application/json'
    }
});
