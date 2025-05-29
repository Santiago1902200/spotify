import { supabase } from "../supabase.js";

export async function renderMainView() {
  const container = document.createElement("div");
  container.className = "menu-principal";

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user || error) {
    container.innerHTML = `
      <div class="logo-principal">
        <img src="spotify.png" alt="spotify-logo" width="100px" />
        <p>Millones de canciones.</p>
        <p>Gratis en Spotify</p>
      </div>
      <div class="botones">
        <button class="boton-verde" id="signupBtn">Registrarme gratis</button>
        <button class="con-borde" id="loginBtn">Iniciar sesión</button>
      </div>
    `;

    container.querySelector("#signupBtn").addEventListener("click", () => {
      window.location.hash = "/signup";
    });

    container.querySelector("#loginBtn").addEventListener("click", () => {
      window.location.hash = "/login";
    });

    return container;
  }

  container.innerHTML = `
    <h2>Canciones Disponibles</h2>
    <div id="lista-canciones"></div>
    <button id="logoutBtn">Cerrar sesión</button>
  `;

  const { data: canciones, error: cancionesError } = await supabase
    .from("canciones")
    .select("*");

  const lista = container.querySelector("#lista-canciones");
  if (cancionesError) {
    lista.innerHTML = `<p>Error al cargar canciones: ${cancionesError.message}</p>`;
  } else {
    canciones.forEach((cancion) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${cancion.titulo}</h3>
        <p>Artista: ${cancion.artista}</p>
        <audio controls src="${cancion.url_audio}"></audio>
      `;
      lista.appendChild(div);
    });
  }

  container.querySelector("#logoutBtn").addEventListener("click", async () => {
    await supabase.auth.signOut();
    window.location.hash = "/login";
  });

  return container;
}
