export function mainWindowStructore() {
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
