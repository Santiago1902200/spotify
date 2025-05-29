import { supabase } from "../supabase.js";

export function renderLoginFormView() {
  const container = document.createElement("div");
  container.className = "login-form-container";
  container.innerHTML = `
    <div class="formulario-login">
      <h2>Inicia sesión</h2>
      <form id="loginForm">
        <input type="email" id="login-email" placeholder="Correo electrónico" required />
        <input type="password" id="login-password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
      <p>¿No tienes una cuenta? <a href="#/signup">Regístrate</a></p>
    </div>
  `;

  container.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const correo = document.getElementById("login-email").value;
    const contraseña = document.getElementById("login-password").value;

    const { data: usuarios, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("correo", correo)
      .eq("contraseña", contraseña);

    if (error || usuarios.length === 0) {
      alert("Correo o contraseña incorrectos.");
    } else {
      alert("Inicio de sesión exitoso");
      // Redirige al CRUD de usuario
      window.navigate("/crud-usuario");
    }
  });

  return container;
}
