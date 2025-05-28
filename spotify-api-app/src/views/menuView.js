// views/menuView.js

export function renderMenuView() {
  const container = document.createElement("div");

  container.innerHTML = `
    <header>
      <div class="header-superior">
        <div class="foto-desc">
          <img src="foto-perfil.png" alt="" width="75px" class="foto-perfil" />
          <h1>Your Library</h1>
        </div>
        <div class="busqueda-header">
          <button><img src="lupa.png" alt="" /></button>
          <button><img src="plus-pequeno.png" alt="" class="plus-pequeno" /></button>
        </div>
      </div>
      <nav class="nav-menu">
        <button>Playlist</button>
        <button>Albums</button>
        <button>Artist</button>
      </nav>
    </header>
  `;

  // Evento de navegación con foto de perfil
  container.querySelector(".foto-perfil").addEventListener("click", () => {
    window.navigate("/crud-usuario");
  });

  return container;
}
