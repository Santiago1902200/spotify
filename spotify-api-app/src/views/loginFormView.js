import { supabase } from "../supabase.js";

export function renderLoginFormView() {
  const container = document.createElement("div");
  container.className = "menu-principal";
  container.innerHTML = `
    <div class="header-cerrar-crud">
      <button class="cerrar-crud" id="closeLogin">
        <img src="x.png" alt="cerrar" class="cerrar-crud">
      </button>
    </div>
    <main class="crud-usuario">
      <h1>Inicia sesión</h1>
      <form id="loginForm">
        <label for="login-email">Correo electrónico</label>
        <input type="email" id="login-email" required>
        <label for="login-password">Contraseña</label>
        <input type="password" id="login-password" required>
        <button type="submit" class="guardar-crud">Iniciar sesión</button>
      </form>
      <button id="backMain">Volver</button>
    </main>
  `;

  // Evento al enviar login
  container.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const correo = document.getElementById("login-email").value;
    const contraseña = document.getElementById("login-password").value;

    // Buscar el usuario
    const { data: usuarios, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("correo", correo)
      .eq("contraseña", contraseña);

    if (error || usuarios.length === 0) {
      alert("Credenciales incorrectas o error al iniciar sesión.");
    } else {
      // Guardar correo en localStorage
      localStorage.setItem("usuario_correo", correo);
      alert("Inicio de sesión exitoso");
      window.location.hash = "/crud-usuario";
    }
  });

  // Cerrar y volver
  container.querySelector("#closeLogin").addEventListener("click", () => {
    window.location.hash = "/";
  });

  container.querySelector("#backMain").addEventListener("click", () => {
    window.location.hash = "/";
  });

  return container;
}
