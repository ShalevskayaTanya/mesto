export default class UserInfo {
    constructor({ titleSelector, jobSelector }) {
        this._titleSelector = titleSelector;
        this._jobSelector = jobSelector;
        this._titleElement = document.querySelector(this._titleSelector);
        this._jobElement = document.querySelector(this._jobSelector);
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    getUserInfo() {
        const userData = {};
        userData['title'] = this._titleElement.textContent;
        userData['about'] = this._jobElement.textContent;

        return userData;
    }

    setUserInfo(userData) {
        this._titleElement.textContent = userData['title'];
        this._jobElement.textContent = userData['about'];
    }
}