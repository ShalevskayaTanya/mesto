//Добавление стандартных карточек

const initialCards = [
  {
    name: "Букля.",
    link: "./images/ed00161cff818560935f679e8b9bd3e6e565a998r1-1280-1225v2_hq.jpg",
  },
  {
    name: "Шрам.",
    link: "./images/field_image_harry-lightning-bolt.jpg",
  },
  {
    name: "Гриффиндор.",
    link: "./images/iT7j7dmmb4Y.jpg",
  },
  {
    name: "Сливочное пиво.",
    link: "./images/slivochnoe-pivo-iz-garri-pottera-retsepty-prigotovleniya-lyubimogo-bezalkogolnogo-napitka-yunogo-volshebnika.jpg",
  },
  {
    name: "Снитч.",
    link: "./images/MV5BM2RhOTZhMDktYmEzMi00YTA4LTk1ZWQtNDQwZjdmNzM4Y2JiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
  },
  {
    name: "Хогвартс.",
    link: "./images/216771_or.jpg",
  },
];

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
  const toggleLikes = function () {
    cardLike.classList.toggle("element__like-button_active");
  };
  cardLike.addEventListener("click", toggleLikes);

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
const standartCard = initialCards.map(function (card) {
  return createCard(card.name, card.link);
});
cardItems.append(...standartCard);

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
}

//Общая функция для закрытия попап
function closePopup(popup) {
  popup.classList.remove("popup_opened");
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
}

formAddElement.addEventListener("submit", saveCard);

//Закрытие попап увеличения озображения
popupCloseImg.addEventListener("click", () => {
  closePopup(popupZoom);
});



/* const closePopupClick = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};
*/
