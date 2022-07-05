import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, formName, popupConfig, {inputSelector, sumbitButtonSelector, formSelector}, submitCallBack, getCallBack = null) {
        super(popupSelector, popupConfig);
        console.dir(this);
        this._formName = formName;
        this._submitCallBack = submitCallBack;
        this._inputSelector = inputSelector;
        this._submitButtonSelector = sumbitButtonSelector;
        this._getCallBack = getCallBack;
        this._formSelector = formSelector;
        this._formElement = document.forms[this._formName];
        console.dir(this._formElement);
        console.log(`.${this._inputSelector}`);
        this._inputs = Array.from(this._formElement.querySelectorAll(`.popup__input`));
        this._submitButton = this._formElement.querySelector(`.${this._submitButtonSelector}`);
    }

    _getInputValues () {
        const values = {};
        this._inputs.forEach((inputElement) => {
            console.log(inputElement.id.slice(6));
            values[inputElement.id.slice(6)] = inputElement.value;
        })
        console.log('_getInputValues');
        console.dir(values);
        return values;
    }

    _setInputValues (values) {
        this._inputs.forEach((inputElement) => {
            inputElement.value = values[inputElement.id.slice(6)];
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this._submitCallBack(this._getInputValues());
        this.close();
    }

    open() {
        if(this._getCallBack) {
            this._setInputValues(this._getCallBack())
        } else {
            this._formElement.reset();
        }
        super.open();
    }

    close() {
        super.close();
        this._formElement.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListeners('submit', this._handleSubmit);
    }

}