import "./handle-input.js";
import "./hanlde-reloj.js";
import { getUserName } from "./controllers/name-controller.js";

const body = document.body;

body.onload = showNameDocument;

export function showNameDocument() {
  if (getUserName() === "" || getUserName() == undefined) {
    const refName = document.getElementById("nombre");
    refName.textContent = "Usuario";
  } else {
    const refName = document.getElementById("nombre");
    const button = document.getElementById("set-name");
    refName.textContent = getUserName();
    button.textContent = "Cambiar nombre";
  }
}
