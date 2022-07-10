console.log('Hello world!');
import '../pages/index.css';
import { initialCards, 
         validConfig, 
         cardsContainerSelector,
         newPlacePopupSelector,
         addButtonSelector,
         editButtonSelector,
         profileConfig,
         imagePopupSelector,
         profilePopupSelector,
         zoomConfiguration,
         popupConfiguration,
         formConfiguration,
         } from '../scripts/constans.js'

import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js'
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';

// Выборка DOM - элементов

//Карточки
const popupEditBtn = document.querySelector(`.${editButtonSelector}`);
const popupAddBtn = document.querySelector(`.${addButtonSelector}`);
const zoomPopup = new PopupWithImage(imagePopupSelector, popupConfiguration, zoomConfiguration);
zoomPopup.setEventListeners();

//Возвращение карточек через js
function createCard(data) {
const card = new Card (data, "#element-template", zoomPopup.open);
return card.generateCardElement();
};

const userProfile = new UserInfo(profileConfig)

const formValidators = {};

Array.from(document.forms).forEach((formElement) => {
 formValidators[formElement.name] = new FormValidator(validConfig, formElement);
 formValidators[formElement.name].enableValidation();
})

const cardContainer = new Section( {
items: initialCards.reverse(), 
renderer: createCard,
}, cardsContainerSelector);
cardContainer.rendererAll();


const handleCardSubmit = (item) => {
cardContainer.addItem(item);
}

const handleProfileSubmit = (data) => {
    userProfile.setUserInfo(data);
}

const newCardPopup = new PopupWithForm(newPlacePopupSelector, popupConfiguration, formConfiguration, handleCardSubmit, formValidators['place'].cleanUpForm);

newCardPopup.setEventListeners();

popupAddBtn.addEventListener('click', newCardPopup.open);

const editProfilePopup = new PopupWithForm(profilePopupSelector, popupConfiguration, formConfiguration, handleProfileSubmit, formValidators['users'].cleanUpForm, userProfile.getUserInfo);
editProfilePopup.setEventListeners();

popupEditBtn.addEventListener('click', editProfilePopup.open);


