import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, popupConfig, submitHandlerCallBack, resetErrorsCallBack, getInfoCallBack = null) {
        super(popupSelector, popupConfig);
        this._form = this._popupElement.querySelector('.popup__form');
        this._submitHandler = submitHandlerCallBack;
        this._getInfoHandler = getInfoCallBack;
        this._inputList = Array.from(this._popupElement.querySelectorAll('.popup__input'));
        this._resetErrorsHandler = resetErrorsCallBack;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        if (this._getInfoHandler) {
            this._setInputValues(this._getInfoHandler());
        }
        this._resetErrorsHandler();
        super.open();
    }

    _getInputValues () {

        const formValues = {};
        this._inputList.forEach(input => {
        formValues[input.name.slice(6)] = input.value;
        });
        return formValues;
    }

    _setInputValues (data) {
        this._inputList.forEach(input => {
        
        input.value = data[input.name.slice(6)];
        });
    }

    _handleFormSubmit = (event) => {
            event.preventDefault();
            this._submitHandler(this._getInputValues());
            this.close();
        }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleFormSubmit);
    }

    close() {
        super.close();
        this._form.reset();
    }
}