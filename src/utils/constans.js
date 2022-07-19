import BuklyaImage from '../images/ed00161cff818560935f679e8b9bd3e6e565a998r1-1280-1225v2_hq.jpg';
import ScarImage from '../images/field_image_harry-lightning-bolt.jpg';
import GrifImage from '../images/iT7j7dmmb4Y.jpg';
import BeerImage from '../images/slivochnoe-pivo-iz-garri-pottera-retsepty-prigotovleniya-lyubimogo-bezalkogolnogo-napitka-yunogo-volshebnika.jpg';
import SnitchImage from '../images/MV5BM2RhOTZhMDktYmEzMi00YTA4LTk1ZWQtNDQwZjdmNzM4Y2JiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg';
import Hogwatrs from '../images/216771_or.jpg';

export const initialCards = [
    {
      name: "Букля.",
      link: BuklyaImage
    },
    {
      name: "Шрам.",
      link: ScarImage
    },
    {
      name: "Гриффиндор.",
      link: GrifImage
    },
    {
      name: "Сливочное пиво.",
      link: BeerImage
    },
    {
      name: "Снитч.",
      link: SnitchImage
    },
    {
      name: "Хогвартс.",
      link: Hogwatrs
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
    inputwithForm: 'popup__input',
    formWithForm: 'popup__form',
}

export const cardsContainerSelector = 'elements__items';

//Селекторы попапов
export const newPlacePopupSelector = '.popup_type_add-card';
export const profilePopupSelector = '.popup_type_edit-profile';
export const imagePopupSelector = '.popup_zoom';

export const newPlaceFormName = 'place';
export const profileFormName = 'users';

//Кнопки редактирования и добавления
export const buttonEditSelector = 'profile__edit-button';
export const buttonAddSelector = 'profile__add-button';

export const profileConfig = {
    titleSelector: '.profile__title',
    jobSelector: '.profile__about',
}