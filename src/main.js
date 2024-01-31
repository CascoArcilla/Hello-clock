import { initialButton } from "./handle-input.js";
import { initialInput } from "./controllers/change-name.js";
import { updateDocument } from "./functions/update-document.js";
import "./hanlde-reloj.js";

const body = document.body;

body.onload = showFirstDocument;

export function showFirstDocument() {
  updateDocument();
  initialButton();
  initialInput();
}
