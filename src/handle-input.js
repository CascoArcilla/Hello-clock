import { getElemts } from "./functions/getElements.js";

export function initialButton() {
  const { button } = getElemts();
  button.addEventListener("click", showInput);
}

function showInput() {
  const { button, refName, input } = getElemts();
  refName.classList.add("hidden-element");
  input.classList.remove("hidden-element");
  changeTextButton();
  button.removeEventListener("click", showInput);
  button.addEventListener("click", hiddenInput);
}

function hiddenInput() {
  const { button, refName, input } = getElemts();
  input.classList.add("hidden-element");
  refName.classList.remove("hidden-element");
  changeTextButton();
  button.removeEventListener("click", hiddenInput);
  button.addEventListener("click", showInput);
}

function changeTextButton() {
  const { isShowInput, thereIsName, button } = getElemts();
  const saveText = thereIsName ? "Cambiar" : "Establecer";
  const text = isShowInput ? "Guardar nombre" : `${saveText} nombre`;
  button.textContent = text;
}
