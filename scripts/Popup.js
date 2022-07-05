export default class Popup {
    constructor(popupSelector, {activeModifier, closeBtnSelector}) {
        console.log(this._popupSelector);
        console.log(this._popup);
        this._popupSelector = popupSelector;
        this._activeModifier = activeModifier;
        this._closeBtnSelector = closeBtnSelector;
    }

    _handleCloseBtnClick = () => {
        this.close();
    }

    _handleCloseOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }

    _handleEscClose = (event) => {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        console.log(this._popupSelector);
        this._popup = document.querySelector(this._popupSelector);
        console.log(this._popup);
        this._popupCloseButton = this._popup.querySelector(`.${this._closeBtnSelector}`);
        this._popup.addEventListener('mousedown', this._handleCloseOverlayClick);
        this._popupCloseButton.addEventListener('click', this._handleCloseBtnClick);
    }

    show() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.add(`.${this._activeModifier}`);
    }

    close() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.remove(`.${this._activeModifier}`);
    }

}

