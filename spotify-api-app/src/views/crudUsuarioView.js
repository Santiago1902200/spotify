export function renderCrudUsuarioView() {
  const container = document.createElement("div");
  container.className = "crud-usuario";
  container.innerHTML = `
    <h1>Editar Perfil de Usuario</h1>
    <!-- Aquí va el formulario o la información del usuario -->
    <form id="usuarioForm">
      <label for="usuario-email">Correo electrónico</label>
      <input type="email" id="usuario-email" required>
      <label for="usuario-nombre">Nombre</label>
      <input type="text" id="usuario-nombre" required>
      <button type="submit" class="guardar-crud">Guardar Cambios</button>
    </form>
    <button id="backMenu">Volver al menú</button>
  `;

  container.querySelector("#backMenu").addEventListener("click", () => {
    window.navigate("/");
  });

  // Agregar lógica de envío de formulario según requieras...

  return container;
}
