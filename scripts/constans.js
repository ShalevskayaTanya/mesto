export const initialCards = [
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

  export const validConfig = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_inactive",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
}

export const formConfiguration = {
    inputSelector: '.popup__input',
    submitButtonSelector: ".popup__submit-button",
    formSelector: 'popup__form',
}

export const popupConfiguration = {
    activeModifier: 'popup_opened',
    closeBtnSelector: 'popup__close-button',

}

export const cardsContainerSelector = 'elements__items';

export const newPlacePopupSelector = 'popup_type_add-card';
export const profilePopupSelector = 'popup_type_edit-profile';
export const imagePopupSelector = 'popup_zoom';
export const newPlaceFormName = 'place';
export const profileFormName = 'users';