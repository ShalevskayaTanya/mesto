import '../pages/index.css';
import { initialCards, 
         validConfig, 
         cardsContainerSelector,
         newPlacePopupSelector,
         buttonAddSelector,
         buttonEditSelector,
         profileConfig,
         imagePopupSelector,
         profilePopupSelector,

         formConfiguration,
         } from '../utils/constans.js'

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js'
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

// Выборка DOM - элементов

//Карточки
const popupEditBtn = document.querySelector(`.${buttonEditSelector}`);
const popupAddBtn = document.querySelector(`.${buttonAddSelector}`);
const zoomPopup = new PopupWithImage(imagePopupSelector);
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
cardContainer.rendererItems();


const handleCardSubmit = (item) => {
cardContainer.addItem(item);
}

const handleProfileSubmit = (data) => {
    userProfile.setUserInfo(data);
}

const newCardPopup = new PopupWithForm(newPlacePopupSelector, formConfiguration, handleCardSubmit, formValidators['place'].cleanUpForm);

newCardPopup.setEventListeners();

popupAddBtn.addEventListener('click', newCardPopup.open);

const popupProfileEdit = new PopupWithForm(profilePopupSelector, formConfiguration, handleProfileSubmit, formValidators['users'].cleanUpForm, userProfile.getUserInfo);
popupProfileEdit.setEventListeners();

popupEditBtn.addEventListener('click', popupProfileEdit.open);


