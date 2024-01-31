import { getElemts } from "./getElements.js";
import { getUserName } from "../controllers/name-controller.js";

export function updateDocument() {
  const { button, refName } = getElemts();

  if (getUserName() === "" || getUserName() == undefined) {
    refName.textContent = "Usuario";
  } else {
    refName.textContent = getUserName();
    button.textContent = "Cambiar nombre";
  }
}
