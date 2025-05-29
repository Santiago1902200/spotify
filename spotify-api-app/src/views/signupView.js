import { supabase } from "../supabase.js";

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

  container.querySelector("#signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const correo = document.getElementById("signup-email").value;
    const contraseña = document.getElementById("signup-password").value;
    const nacimiento = document.getElementById("signup-birthdate").value;
    const genero = document.getElementById("genero").value;

    const { error } = await supabase.from("usuarios").insert([
      {
        correo,
        contraseña,
        nombre: genero, // puedes reemplazar esto si quieres pedir nombre real
        nacimiento,
      },
    ]);

    if (error) {
      alert("Error al registrar usuario: " + error.message);
    } else {
      alert("Usuario registrado correctamente.");
      window.location.hash = "/login"; // redirige al login
    }
  });

  container.querySelector("#closeSignup").addEventListener("click", () => {
    window.location.hash = "/";
  });

  container.querySelector("#backMain").addEventListener("click", () => {
    window.location.hash = "/";
  });

  return container;
}
