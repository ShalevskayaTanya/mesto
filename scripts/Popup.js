export default class Popup {
    constructor(popupSelector, {closeBtnSelector, openModifier} ) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(`.${this._popupSelector}`);
        this.close = this.close.bind(this);
        this._openModifier = openModifier;
        this._closeBtnSelector = closeBtnSelector;
    }

    open() {
        this._popupElement.addEventListener('click', this._handleCloseOverlayClick);
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.classList.add(this._openModifier);
    }

    close() {
        this._popupElement.classList.remove(this._openModifier);
        this._popupElement.removeEventListener('click', this._handleCloseOverlayClick)
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (event) => {
        if(event.key === 'Escape') 
            this.close();
    }

    _handleCloseOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        const closeBtn = this._popupElement.querySelector(`.${this._closeBtnSelector}`);
        closeBtn.addEventListener('click', this.close);
    }

}

