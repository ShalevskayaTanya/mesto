//Добавление стандартных карточек

const initialCards = [
    {
      name: 'Букля.',
      link: './images/ed00161cff818560935f679e8b9bd3e6e565a998r1-1280-1225v2_hq.jpg'
    },
    {
      name: 'Шрам.',
      link: './images/field_image_harry-lightning-bolt.jpg'
    },
    {
      name: 'Гриффиндор.',
      link: './images/iT7j7dmmb4Y.jpg'
    },
    {
      name: 'Сливочное пиво.',
      link: './images/slivochnoe-pivo-iz-garri-pottera-retsepty-prigotovleniya-lyubimogo-bezalkogolnogo-napitka-yunogo-volshebnika.jpg'
    },
    {
      name: 'Снитч.',
      link: './images/MV5BM2RhOTZhMDktYmEzMi00YTA4LTk1ZWQtNDQwZjdmNzM4Y2JiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg'
    },
    {
      name: 'Хогвартс.',
      link: './images/216771_or.jpg'
    }
    
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

    cardImage.src=linkValue;
    cardImage.alt=nameValue;
    cardName.textContent=nameValue;

    //Лайк на карточку
    const cardLikeActive = function () {
        cardLike.classList.toggle("element__like-button_active");
    }
    cardLike.addEventListener("click", cardLikeActive);

    //Удаление карточки
    const cardDeleteEl = function (event) {
        event.target.closest(".element"). remove();
    }

    cardDelete.addEventListener("click", cardDeleteEl);

    const zoomImage = function (event) {
      
      zoomImg.src=event.target.src;
      zoomImg.alt=event.target.alt;
      subtitleImg.textContent=event.target.alt;
      openPopupZoom(popupZoom);
    }
    
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
const popupEditElement = document.querySelector(".popup_type_edit-profile");
const popupCloseEditElement = document.querySelector(".popup_close_edit-button");
const popupEditProfileElement = document.querySelector(".profile__edit-button");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const currentName = document.querySelector(".profile__title");
const currentAbout = document.querySelector(".profile__subtitle");
const formEditElement = document.querySelector(".popup__form-edit");

//Карточки
const popupAddElement = document.querySelector(".popup_type_add-card");
const popupAddProfileElement = document.querySelector(".profile__add-button");
const popupCloseAddElement = document.querySelector(".popup_close_add-button");
const formAddElement = document.querySelector(".popup__form-add");
const placeInput = document.getElementById("add");
const linkInput = document.getElementById("link");

//Увеличение изображения
const zoomImg = document.querySelector(".popup__picture");
const subtitleImg = document.querySelector(".popup__caption");
const popupZoom = document.querySelector(".popup_zoom");
const closeZoomImg = popupZoom.querySelector(".popup__close-button");

//Открытие попап увеличения изображения

const openPopupZoom = function () {
  popupZoom.classList.add("popup_opened");
};

//Закрытие попап увеличения изображения
const closePopupZoom = function () {
  popupZoom.classList.remove("popup_opened");
}

//Открытие попап карточек
const openPopupAdd = function () {
  popupAddElement.classList.add("popup_opened");
};
//Закрытие попап карточек
const closePopupAdd = function () {
  popupAddElement.classList.remove("popup_opened");
};

//Открытие попап профиля
const openPopupEdit = function () {
  popupEditElement.classList.add("popup_opened");
  nameInput.value = currentName.textContent;
  jobInput.value = currentAbout.textContent;
};

//Закрытие попап профиля
const closePopupEdit = function () {
  popupEditElement.classList.remove("popup_opened");
};

//Сохранение введенных данных
const editSubmitHandler = function (event) {
  event.preventDefault();
  currentName.textContent = nameInput.value;
  currentAbout.textContent = jobInput.value;
  closePopupEdit(popupEditElement);
};

//Сохранение карточек
function saveCard(event) {
    event.preventDefault();
   cardItems.prepend(createCard(placeInput.value, linkInput.value));
    closePopupAdd(popupAddElement);
}

//Обработчик событий

//Редактирование профиля
popupEditProfileElement.addEventListener("click", openPopupEdit);
popupCloseEditElement.addEventListener("click", closePopupEdit);
formEditElement.addEventListener("submit", editSubmitHandler);

//Добавление карточек
popupAddProfileElement.addEventListener("click", openPopupAdd);
popupCloseAddElement.addEventListener("click", closePopupAdd);
formAddElement.addEventListener("submit", saveCard);

//Увеличение карточки
closeZoomImg.addEventListener("click", closePopupZoom);




/* const transitionPopupVisibility = function() {
 popupEditElement.classList.toggle('popup_opened');
}; */

/* const closePopupClick = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};
*/


