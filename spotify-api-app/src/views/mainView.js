export function renderMainView() {
  const container = document.createElement("div");
  container.className = "menu-principal";
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
    window.navigate("/signup");
  });
  container.querySelector("#loginBtn").addEventListener("click", () => {
    window.navigate("/login");
  });
  return container;
}
