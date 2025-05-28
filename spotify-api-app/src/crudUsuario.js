document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector(".cerrar-crud");
  const saveButton = document.querySelector(".guardar-crud");

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      // Por ejemplo, regresar a la página principal o dashboard
      window.location.href = "index.html";
    });
  }

  if (saveButton) {
    saveButton.addEventListener("click", () => {
      // Aquí puedes capturar y validar los datos del formulario
      alert("Perfil guardado correctamente!");
      // Luego redireccionar o actualizar la UI
      window.location.href = "index.html";
    });
  }
});
