import { getUserName } from "../controllers/name-controller.js";

export function getElemts() {
  const input = document.getElementById("input-set-name");
  const button = document.getElementById("set-name");
  const refName = document.getElementById("nombre");
  const isShowInput = !input.classList.contains("hidden-element");
  const thereIsName = getUserName() === undefined ? false : true;
  return { isShowInput, thereIsName, button, input, refName };
}
