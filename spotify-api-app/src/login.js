import { handleLogin } from "./events/userEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el botón de login
  const loginButton = document.querySelector(".login-btn.boton-verde");
  if (loginButton) {
    loginButton.addEventListener("click", handleLogin);
  }
});
