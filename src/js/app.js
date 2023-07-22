import { mainWindowStructore } from "./mainWindowStructore";
import { AddManager } from "./AddManager";

function app() {
  mainWindowStructore();
  const addManager = new AddManager();
  addManager.addPhoto();
  addManager.deletePhoto();
}

app();
