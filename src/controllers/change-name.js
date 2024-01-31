import { setUserName } from "./name-controller.js";
import { getElemts } from "../functions/getElements.js";
import { updateDocument } from "../functions/update-document.js";

export function saveName(newName) {
  if (newName.length <= 2) {
    setUserName("");
  } else {
    setUserName(newName);
  }
  updateDocument();
}

export function getNameInput(event) {
  const newName = event.target.value;
  saveName(newName);
}

export function initialInput() {
  const { input } = getElemts();
  input.addEventListener("change", getNameInput);
}
