export default class Card {
    constructor(data, selectorTemplate, handlerOpenImg) {
        const {name, link} = data;
        this._selectorTemplate = selectorTemplate;
        this._handlerOpenImg = handlerOpenImg;
        this._name = name;
        this._link = link;
    }

_getCardTemplate() {
    const cardElement = document
    .querySelector(this._selectorTemplate)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
}

_getCard() {
    this._cardImage = this._element.querySelector('.element__picture');
    this._cardName = this._element.querySelector('.element__name');
    this._cardLike = this._element.querySelector('.element__like-button');
    this._cardDelete = this._element.querySelector('.element__delete-button');
}

_setData() {
    this._cardImage.src = this._link
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
}

generateCardElement() {
    this._element = this._getCardTemplate();
    this._getCard();
    this._setData();
    this._setEventListeners();
    return this._element;
}

_setEventListeners() {
    this._cardLike.addEventListener('click', this._handleLikeClick);

    this._cardDelete.addEventListener('click', this._handleDeleteCard);

    this._cardImage.addEventListener('click', this._handleImgClick);
}

_handleLikeClick = () => {
    this._cardLike.classList.toggle('element__like-button_active');
};

_handleDeleteCard = () => {
  this._element.remove();
};

_handleImgClick = () => {
    this._handlerOpenImg({name: this._name, link: this._link});
}

  }
  
