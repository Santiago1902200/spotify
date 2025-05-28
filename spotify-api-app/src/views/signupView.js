export function renderSignupView() {
  const container = document.createElement("div");
  container.className = "menu-principal";
  container.innerHTML = `
    <div class="header-cerrar-crud">
      <button class="cerrar-crud" id="closeSignup">
        <img src="x.png" alt="cerrar" class="cerrar-crud">
      </button>
    </div>
    <main class="crud-usuario">
      <h1>Crear cuenta</h1>
      <form id="signupForm">
        <label for="signup-email">Correo electrónico</label>
        <input type="email" id="signup-email" required>
        <label for="signup-password">Contraseña</label>
        <input type="password" id="signup-password" required>
        <label for="signup-birthdate">Fecha de nacimiento</label>
        <input type="date" id="signup-birthdate" required>
        <label for="genero">Género:</label>
        <select id="genero" name="genero">
          <option value="mujer">Mujer</option>
          <option value="hombre">Hombre</option>
        </select>
        <button type="submit" class="guardar-crud">Guardar perfil</button>
      </form>
      <button id="backMain">Volver</button>
    </main>
  `;
  container.querySelector("#signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(
      "Registrando usuario:",
      document.getElementById("signup-email").value
    );
    // Completa la lógica para guardar el perfil
  });
  container.querySelector("#closeSignup").addEventListener("click", () => {
    window.navigate("/");
  });
  container.querySelector("#backMain").addEventListener("click", () => {
    window.navigate("/");
  });
  return container;
}
