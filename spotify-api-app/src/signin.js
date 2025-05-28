document.addEventListener("DOMContentLoaded", () => {
  // Botón de registro con email
  const emailButton = document.querySelector(".login-btn.boton-verde");
  if (emailButton) {
    emailButton.addEventListener("click", () => {
      // Aquí puedes implementar la lógica de registro por email.
      // Por ejemplo, redirigir a un formulario especializado:
      window.location.href = "email-signup.html"; // o muestra un modal, etc.
    });
  }

  // Botón de registro con Google
  // Se asume que es el primer botón con clase "con-borde"
  const googleButton = document.querySelectorAll(".login-btn.con-borde")[0];
  if (googleButton) {
    googleButton.addEventListener("click", () => {
      // Implementa la lógica para iniciar sesión con Google.
      alert("Registro con Google");
      // window.location.href = "google-signup.html"; // o inicia el flujo correspondiente
    });
  }

  // Botón de registro con número de teléfono
  // Se asume que es el segundo botón con clase "con-borde"
  const phoneButton = document.querySelectorAll(".login-btn.con-borde")[1];
  if (phoneButton) {
    phoneButton.addEventListener("click", () => {
      // Implementa la lógica para registro mediante número de teléfono.
      alert("Registro con número de teléfono");
      // window.location.href = "phone-signup.html"; // o muestra un formulario especializado
    });
  }

  // Enlace para redirigir a la página de login
  const loginLink = document.querySelector(".signup-link a");
  if (loginLink) {
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "login.html";
    });
  }
});
