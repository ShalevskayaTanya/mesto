import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._imgElement = this._popupElement.querySelector('.popup__picture');
        this._captionElement = this._popupElement.querySelector('.popup__caption');
        this.open = this.open.bind(this);
    }

    open({name, link}) {
        super.open();

        this._imgElement.src = link;
        this._captionElement.textContent = name;
        this._imgElement.alt = name;
    }
}