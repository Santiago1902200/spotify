export function renderLoginFormView() {
  const container = document.createElement("div");
  container.className = "crud-usuario-container";
  container.innerHTML = `
    <div class="header-cerrar-crud">
      <button class="cerrar-crud" id="closeLoginForm">
        <img src="x.png" alt="cerrar" class="cerrar-crud">
      </button>
    </div>
    <main class="crud-usuario">
      <h1>Iniciar sesion</h1>
      <label for="login-email">Correo electrónico</label>
      <input type="email" id="login-email" required>
      <label for="login-password">Contraseña</label>
      <input type="password" id="login-password" required>
      <button class="guardar-crud" id="loginSubmit">Iniciar sesion</button>
    </main>
  `;

  // Al hacer clic en el botón de cerrar, regresa a la vista de login (o mainView según convenga)
  container.querySelector("#closeLoginForm").addEventListener("click", () => {
    window.navigate("/login");
  });
  // Al enviar el formulario, ejecuta el flujo de login (aquí solo se registra en consola)
  container.querySelector("#loginSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    const email = container.querySelector("#login-email").value;
    const password = container.querySelector("#login-password").value;
    console.log("Formulario login enviado:", email, password);
    // Aquí puedes llamar a handleLogin u otra función para procesar el login
  });

  return container;
}
