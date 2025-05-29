import { supabase } from "../supabase.js";

export async function renderCrudUsuarioView() {
  const container = document.createElement("div");
  container.className = "usuario-panel";

  // Obtenemos el correo desde localStorage
  const correoUsuario = localStorage.getItem("usuario_correo");

  if (!correoUsuario) {
    container.innerHTML = `<p>No has iniciado sesión.</p>`;
    return container;
  }

  // Buscar al usuario por su correo
  const { data: usuarios, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("correo", correoUsuario);

  if (error || usuarios.length === 0) {
    container.innerHTML = `<p>Error al cargar el perfil.</p>`;
    return container;
  }

  const usuario = usuarios[0];

  container.innerHTML = `
    <h2>Perfil de ${usuario.nombre}</h2>
    <form id="editar-perfil">
      <label>Nombre:</label>
      <input type="text" id="nombre" value="${usuario.nombre}" required>
      <label>Correo:</label>
      <input type="email" id="correo" value="${usuario.correo}" disabled>
      <label>Contraseña:</label>
      <input type="password" id="contraseña" value="${usuario.contraseña}" required>
      <button type="submit">Guardar cambios</button>
    </form>
    <button id="logout">Cerrar sesión</button>
  `;

  // Evento para cerrar sesión
  container.querySelector("#logout").addEventListener("click", () => {
    localStorage.removeItem("usuario_correo");
    window.navigate("/login");
  });

  // Evento para editar perfil
  container.querySelector("#editar-perfil").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nuevoNombre = document.getElementById("nombre").value;
    const nuevaContraseña = document.getElementById("contraseña").value;

    const { error } = await supabase
      .from("usuarios")
      .update({ nombre: nuevoNombre, contraseña: nuevaContraseña })
      .eq("correo", correoUsuario);

    if (error) {
      alert("Error al guardar cambios.");
    } else {
      alert("Perfil actualizado.");
    }
  });

  return container;
}
