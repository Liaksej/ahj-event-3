/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/mainWindowStructore.js
function mainWindowStructore() {
  const mainWindow = document.createElement("div");
  mainWindow.classList.add("main-window");
  mainWindow.innerHTML = `<form class="form">
                            <div class="inputs">    
                              <div class="input-block">
                                <label for="name-input name">Название</label>
                                <input class="name-input" type="text" id="name-input" required>
                              </div>
                              <div class="input-block link">
                                <label for="link-input">Ссылка на изображение</label>
                                <input class="link-input" type="text" id="link-input" required>
                              </div>
                            </div>
                            <button class="button" type="submit">Добавить</button>
                          </form>
                          <div class="images-field"></div>`;
  document.body.appendChild(mainWindow);
}
;// CONCATENATED MODULE: ./src/js/AddManager.js
class AddManager {
  constructor() {
    this.form = document.querySelector(".form");
    this.nameInput = this.form.querySelector(".name-input");
    this.linkInput = this.form.querySelector(".link-input");
  }
  _notificationErrorLinkHandler() {
    let hidded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!this.form.querySelector(".notification-error")) {
      const notification = document.createElement("div");
      notification.classList.add("notification-error");
      notification.textContent = "Неверный URL изображения";
      document.querySelector(".link").appendChild(notification);
    }
    if (hidded) {
      if (this.form.querySelector(".notification-error")) {
        this.form.querySelector(".notification-error").classList.add("hidden");
      }
    }
    if (!hidded) {
      if (this.form.querySelector(".notification-error")) {
        this.form.querySelector(".notification-error").classList.remove("hidden");
      }
    }
  }
  _printImage(image, name) {
    const imageElement = document.createElement("div");
    imageElement.classList.add("image-box");
    const imageX = document.createElement("div");
    imageX.classList.add("image-X");
    imageX.textContent = "  x  ";
    imageElement.appendChild(imageX);
    image.width = 200;
    image.alt = name;
    imageElement.appendChild(image);
    document.querySelector(".images-field").appendChild(imageElement);
  }
  addPhoto() {
    this.form.addEventListener("submit", event => {
      if (this.nameInput.value.trim() && this.linkInput.value.trim()) {
        const image = new Image();
        image.src = this.linkInput.value;
        image.addEventListener("load", () => {
          this._printImage(image, this.nameInput.value);
          this._notificationErrorLinkHandler(true);
          this.nameInput.value = "";
          this.linkInput.value = "";
        });
        image.addEventListener("error", () => {
          this._notificationErrorLinkHandler();
          this.linkInput.value = "";
        });
      }
      event.preventDefault();
    });
  }
  deletePhoto() {
    const mainWindow = document.querySelector(".main-window");
    mainWindow.addEventListener("click", event => {
      if (event.target.classList.contains("image-X")) {
        event.target.closest(".image-box").remove();
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


function app() {
  mainWindowStructore();
  const addManager = new AddManager();
  addManager.addPhoto();
  addManager.deletePhoto();
}
app();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map