// Выборка DOM - элементов
const popupEditElement = document.querySelector(".popup");
const popupCloseElement = popupEditElement.querySelector(".popup__close-button");
const popupEditProfileElement = document.querySelector(".profile__edit-button");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const currentName = document.querySelector(".profile__title");
const currentAbout = document.querySelector(".profile__subtitle");
const formElement = document.querySelector("form[name='popup-form']");



/* const transitionPopupVisibility = function() {
 popupEditElement.classList.toggle('popup_opened');
}; */

const openPopup = function () {
 popupEditElement.classList.add("popup_opened");
 nameInput.value = currentName.textContent;
 jobInput.value = currentAbout.textContent;
};

const closePopup = function () {
  popupEditElement.classList.remove("popup_opened");
}; 

/* const closePopupClick = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};
*/


const editSubmitHandler = function (event) {
    event.preventDefault();
   currentName.textContent = nameInput.value;
   currentAbout.textContent = jobInput.value;
   closePopup(popupEditElement);
}

//Обработчик событий
popupEditProfileElement.addEventListener("click", openPopup);
popupCloseElement.addEventListener("click", closePopup);
formElement.addEventListener('submit', editSubmitHandler); 
