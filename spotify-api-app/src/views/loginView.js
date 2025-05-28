export function renderLoginView() {
  const container = document.createElement("div");
  container.className = "menu-principal";
  container.innerHTML = `
   <div class="logo-principal logo-principal-login">
     <img src="spotify.png" alt="spotify-logo" width="100px" />
     <p>Iniciar sesión en Spotify</p>
   </div>
   <div class="botones-login">
     <button class="login-btn boton-verde" id="emailLogin">
       <i class="fa-solid fa-envelope"></i> Continuar con email
     </button>
     <button class="login-btn con-borde" id="googleLogin">
       <i class="fab fa-google"></i> Continuar con Google
     </button>
   </div>
   <div class="signup-link">
     <p>¿No tienes una cuenta? <a href="#" id="toSignup">Registrarse</a></p>
   </div>
   <button id="backMain">Volver</button>
  `;

  container.querySelector("#emailLogin").addEventListener("click", () => {
    window.navigate("/loginForm");
  });
  container.querySelector("#toSignup").addEventListener("click", (e) => {
    e.preventDefault();
    window.navigate("/signup");
  });
  container.querySelector("#backMain").addEventListener("click", () => {
    window.navigate("/");
  });

  return container;
}
