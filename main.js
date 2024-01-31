const showFecha = document.getElementById("fecha");
const showReloj = document.getElementById("reloj");

let fecha = new Date();

const diaSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabadp",
];

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

let fechaHoy = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${
  meses[fecha.getMonth()]
} del ${fecha.getFullYear()}`;

showFecha.textContent = fechaHoy;

setInterval(() => {
  let fecha = new Date();
  let hora = fecha.toLocaleTimeString();
  showReloj.textContent = hora;
}, 1000);
