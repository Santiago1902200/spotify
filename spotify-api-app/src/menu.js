document.addEventListener("DOMContentLoaded", () => {
  console.log("menu.js loaded");

  // Verificar el contenido del contenedor "menu"
  const menuContainer = document.getElementById("menu");
  console.log("Contenido del contenedor #menu:", menuContainer.innerHTML);

  // Usar delegación de eventos en el contenedor para capturar clics en la imagen de perfil.
  menuContainer.addEventListener("click", (e) => {
    // Buscamos si el clic se realizó sobre un elemento con la clase "foto-perfil" (o en alguno de sus descendientes)
    const fotoPerfil = e.target.closest(".foto-perfil");
    if (fotoPerfil) {
      console.log("Delegation: se hizo clic en la foto de perfil");
      if (typeof window.navigate === "function") {
        window.navigate("/crud-usuario");
      } else {
        console.log("window.navigate no está definida");
      }
    }
  });

  // Navegación de botones en la barra (.nav-menu)
  const navButtons = document.querySelectorAll(".nav-menu button");
  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.target.textContent.toLowerCase();
      if (target === "playlist") {
        window.location.href = "playlist.html";
      } else if (target === "albums") {
        window.location.href = "albums.html";
      } else if (target === "artist") {
        window.location.href = "artist.html";
      }
    });
  });
});
