export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(`.${this._popupSelector}`);   
        this._popupButtonClose = this._popupElement.querySelector('.popup__close-button');
        this.close = this.close.bind(this);
    }
  
    open() {
        this._popupElement.addEventListener('click', this._handleCloseOverlayClick);
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.classList.add('popup_opened');
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
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
        // console.dir(this._popupButtonClose);
        // const closeBtn = this._popupElement.querySelector(`.${this._popupButtonClose}`);
        this._popupButtonClose.addEventListener('click', this.close);
    }

}

