export function setUserName(name) {
  window.localStorage.setItem("nombre-usario", name);
}

export function getUserName() {
  return window.localStorage.getItem("nombre-usario");
}
