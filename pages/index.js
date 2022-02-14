// Выборка DOM - элементов
const popupEditElement = document.querySelector(".popup");
const popupCloseElement = popupEditElement.querySelector(".popup__close-button");
const popupEditProfileElement = document.querySelector(".profile__edit-button");
const popupSaveElement = document.querySelector(".popup__save-button");



/* const transitionPopupVisibility = function() {
 popupEditElement.classList.toggle('popup_opened');
}; */

const openPopup = function () {
  popupEditElement.classList.add("popup_opened");
};

const closePopup = function () {
  popupEditElement.classList.remove("popup_opened");
};

const closePopupClick = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};

const formSubmitHandler = function (event) {
    event.preventDefault();
    const nameInput = document.querySelector(".popup__name-edit").value;
    const jobInput = document.querySelector(".popup__about-edit").value;


   // console.log(nameInput);
   document.querySelector(".profile__title").textContent = nameInput;
   document.querySelector(".profile__subtitle").textContent = jobInput;

}

//Обработчик событий
popupEditProfileElement.addEventListener("click", openPopup);
popupCloseElement.addEventListener("click", closePopup);
popupEditElement.addEventListener("click", closePopupClick);
popupSaveElement.addEventListener("click", formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler); 
