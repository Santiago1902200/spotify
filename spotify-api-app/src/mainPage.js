document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.querySelector(".boton-verde");
  const loginButton = document.querySelector(".con-borde");

  if (registerButton) {
    registerButton.addEventListener("click", () => {
      // Redirige al formulario de registro (por ejemplo, signin.html)
      window.location.href = "signin.html";
    });
  }

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      // Redirige a la página de login
      window.location.href = "login.html";
    });
  }
});
