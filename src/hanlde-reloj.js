import { diaSemana, meses } from "./data/days-weeks.js";

const showFecha = document.getElementById("fecha");
const showReloj = document.getElementById("reloj");

let fecha = new Date();

let fechaHoy = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${
  meses[fecha.getMonth()]
} del ${fecha.getFullYear()}`;

showFecha.textContent = fechaHoy;

setInterval(() => {
  let fecha = new Date();
  let hora = fecha.toLocaleTimeString();
  showReloj.textContent = hora;
}, 1000);
