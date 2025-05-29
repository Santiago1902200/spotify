import { supabase } from "./supabase.js";
import { mostrarLogin } from "./login.js"; // Para volver al login luego del registro

export function mostrarRegistro() {
  document.getElementById("app").innerHTML = `
    <section>
      <h2>Registro</h2>
      <form id="registro-form">
        <input type="text" name="nombre" placeholder="Nombre" required />
        <input type="email" name="correo" placeholder="Correo" required />
        <input type="password" name="contraseña" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes cuenta? <a href="#/login">Inicia sesión</a></p>
    </section>
  `;

  const form = document.getElementById("registro-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = form.nombre.value;
    const correo = form.correo.value;
    const contraseña = form.contraseña.value;

    const { error } = await supabase.from("usuarios").insert([
      { nombre, correo, contraseña },
    ]);

    if (error) {
      alert("Error al registrarse: " + error.message);
    } else {
      alert("Usuario registrado correctamente.");
      window.location.hash = "#/login";
    }
  });
}
