//'use strict'

var contactsLink = document.querySelector(".contacts__link");
var popup        = document.querySelector(".popup");

var popupClose   = popup.querySelector(".popup__close");
var formPopup    = popup.querySelector("form");

var userName     = formPopup.querySelector("[name=user-name]");
var email        = formPopup.querySelector("[name=email]");
var textArea     = formPopup.querySelector("[name=text]");

var storageName  = localStorage.getItem("user-name");
var storageEmail = localStorage.getItem("email");


contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup__show");

  if (storageName && storageEmail) {
    userName.value = storageName;
    email.value    = storageEmail;
    textArea.focus();
  } else if (storageName) {
    userName.value = storageName;
    email.focus();
  } else {
    userName.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup__show");
  popup.classList.remove("popup__error");
});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {

    if (popup.classList.contains("popup__show")) {
      popup.classList.remove("popup__show");
      popup.classList.remove("popup__error");
    }

  }

})

formPopup.addEventListener("submit", function (evt) {

  if(!userName.value || !email.value) {

    evt.preventDefault();
    popup.classList.remove("popup__error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup__error");

  } else {
    localStorage.setItem("user-name", userName.value);
    localStorage.setItem("email", email.value);
  }

})
