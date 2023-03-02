// Получаем элемент редактирования иконки
const editProfile = document.querySelector('.profile__editor');
// Получаем popup редактирования профиля
const popupEditProfile = document.querySelector('.popup');
// Получаем элемент иконки закрытия popup
const popupCloseIcon = popupEditProfile.querySelector('.popup__close');
// Получаем имя профиля
const profileName = document.querySelector('.profile__name');
// Получаем описание профиля
const profileDescription = document.querySelector('.profile__description');
// Получаем input имени
const nameInput = popupEditProfile.querySelector('.popup__input_item_name');
// Получаем input описания
const descriptionInput = popupEditProfile.querySelector('.popup__input_item_description');

// Функция открытия popup
const popupOpen = function () {
  popupEditProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}
// Функция закрытия popup
const popupClose = function () {
  popupEditProfile.classList.remove('popup_opened');
}
// Функция сохранения введённых в форму данных (имени и описания)
const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  popupClose();
}

// Добавляем класс в popup при клике на иконку редактирования профиля
editProfile.addEventListener('click', popupOpen);
// Удаляем класс из popup при клике на иконку закрытия popup
popupCloseIcon.addEventListener('click', popupClose);
// Обновляем данные формы при нажатии кнопки сохранения
popupEditProfile.addEventListener('submit', formSubmitHandler);
