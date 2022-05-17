//Добавление стандартных карточек

// Выборка DOM - элементов карточки
const cardTemplate = document.querySelector("#element-template").content;
const cardItems = document.querySelector(".elements__items");

//Возвращение карточек через js
function createCard(nameValue, linkValue) {
  const card = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = card.querySelector(".element__picture");
  const cardName = card.querySelector(".element__name");
  const cardLike = card.querySelector(".element__like-button");
  const cardDelete = card.querySelector(".element__delete-button");

  cardImage.src = linkValue;
  cardImage.alt = nameValue;
  cardName.textContent = nameValue;

  //Лайк на карточку
  const handleToggleLike = function () {
    cardLike.classList.toggle("element__like-button_active");
  };
  cardLike.addEventListener("click", handleToggleLike);

  //Удаление карточки
  const deleteCard = function (event) {
    event.target.closest(".element").remove();
  };

  cardDelete.addEventListener("click", deleteCard);

  //Подставляет значения к изображению
  const zoomImage = function (event) {
    showPopup(popupZoom);
    zoomImg.src = event.target.src;
    zoomImg.alt = event.target.alt;
    subtitleImg.textContent = event.target.alt;
  };

  //Увеличение изображения с подставлением значений
  cardImage.addEventListener("click", zoomImage);

  return card;
}

//Добавление стандартных карточек
const standartCards = initialCards.map(function (card) {
  return createCard(card.name, card.link);
});
cardItems.append(...standartCards);

// Выборка DOM - элементов
//Редактирование профиля
const popupEdit = document.querySelector(".popup_type_edit-profile");
const popupCloseEdit = document.querySelector(".popup__close-button_type_edit");
const popupEditBtn = document.querySelector(".profile__edit-button");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const currentName = document.querySelector(".profile__title");
const currentAbout = document.querySelector(".profile__subtitle");
const formEditElement = document.querySelector(".popup__form-edit");

//Карточки
const popupAdd = document.querySelector(".popup_type_add-card");
const popupAddBtn = document.querySelector(".profile__add-button");
const popupCloseAdd = document.querySelector(".popup__close-button_type_add");
const formAddElement = document.querySelector(".popup__form-add");
const placeInput = document.getElementById("add");
const linkInput = document.getElementById("link");

//Увеличение изображения
const zoomImg = document.querySelector(".popup__picture");
const subtitleImg = document.querySelector(".popup__caption");
const popupZoom = document.querySelector(".popup_zoom");
const popupCloseImg = document.querySelector(".popup__close-button_type_img");


//Общая функция для открытия попап
function showPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", closeByEscape);
}

//Общая функция для закрытия попап
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", closeByEscape);
}

//Закрытие через Esc
function closeByEscape (evt) {
    if (evt.key === 'Escape') {
        const closePopupEsc = document.querySelector(".popup_opened")
        closePopup(closePopupEsc);
    }
}

//Открытие попап редактирования профиля
popupEditBtn.addEventListener("click", function showPopupedit() {
  showPopup(popupEdit);
  nameInput.value = currentName.textContent;
  jobInput.value = currentAbout.textContent;
});

//Закрытие попап редактирования профия
popupCloseEdit.addEventListener("click", () => {
  closePopup(popupEdit);
});

//Сохранение введенных данных
const handleProfileFormSubmit = function (event) {
  event.preventDefault();
  currentName.textContent = nameInput.value;
  currentAbout.textContent = jobInput.value;
  closePopup(popupEdit);
};

formEditElement.addEventListener("submit", handleProfileFormSubmit);

//Открытие попап добавления карточек
popupAddBtn.addEventListener("click", () => {
  showPopup(popupAdd);
});

//Закрытие попап добавления карточек
popupCloseAdd.addEventListener("click", () => {
  closePopup(popupAdd);
});

//Сохранение добавленного изображения
function saveCard(event) {
  event.preventDefault();
  cardItems.prepend(createCard(placeInput.value, linkInput.value));

  closePopup(popupAdd);

  formAddElement.reset();
  disableSubmitButton();
}

function disableSubmitButton () {
  const disableButton = popupAdd.querySelector('.popup__submit-button');
  disableButton.classList.add('popup__submit-button_inactive');
  disableButton.setAttribute('disabled', 'disabled');
}

formAddElement.addEventListener("submit", saveCard);

//Закрытие попап увеличения озображения
popupCloseImg.addEventListener("click", () => {
  closePopup(popupZoom);
});

//Закрытие Редактирование профиля Overlay
function overlayClosePopup (event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

popupEdit.addEventListener("click", overlayClosePopup);
popupAdd.addEventListener("click", overlayClosePopup);
popupZoom.addEventListener("click", overlayClosePopup);



