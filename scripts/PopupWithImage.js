import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {

    constructor(popupSelector, popupConfig, { imageSelector, captionSelector }) {
        super(popupSelector, popupConfig);
        this._imgElement = this._popupElement.querySelector(`.${imageSelector}`);
        this._captionElement = this._popupElement.querySelector(`.${captionSelector}`);
        this.open = this.open.bind(this);
    }

    open({name, link}) {
        super.open();

        this._imgElement.src = link;
        this._captionElement.textContent = name;
        this._imgElement.alt = name;
    }
}