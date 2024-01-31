import { getUserName } from "./controllers/name-controller.js";
let isShowInput = false;
let thereIsName = getUserName() == undefined ? false : true;
const button = document.getElementById("set-name");
button.addEventListener("click", showInput);

function showInput() {
  const refName = document.getElementById("nombre");
  const input = document.getElementById("input-set-name");
  refName.classList.add("hidden-element");
  input.classList.remove("hidden-element");
  isShowInput = true;
  changeTextButton();
  button.removeEventListener("click", showInput);
  button.addEventListener("click", hiddenInput);
}

function hiddenInput() {
  const refName = document.getElementById("nombre");
  const input = document.getElementById("input-set-name");
  input.classList.add("hidden-element");
  refName.classList.remove("hidden-element");
  isShowInput = false;
  changeTextButton();
  button.removeEventListener("click", hiddenInput);
  button.addEventListener("click", showInput);
}

function changeTextButton() {
  const saveText = thereIsName ? "Cambiar" : "Establecer";
  const text = isShowInput ? "Guardar nombre" : `${saveText} nombre`;
  button.textContent = text;
}
