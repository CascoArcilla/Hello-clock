import { initialButton } from "./handle-input.js";
import { getElemts } from "./functions/getElements.js";
import { getUserName } from "./controllers/name-controller.js";
import "./hanlde-reloj.js";

const body = document.body;

body.onload = showNameDocument;

export function showNameDocument() {
  if (getUserName() === "" || getUserName() == undefined) {
    const { refName } = getElemts();
    refName.textContent = "Usuario";
  } else {
    const { refName, button } = getElemts();
    refName.textContent = getUserName();
    button.textContent = "Cambiar nombre";
  }

  initialButton();
}
