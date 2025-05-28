import { initRouter } from "./router.js";

console.log("main.js cargado");

function extractTokenFromHash() {
  const hash = window.location.hash;
  if (hash) {
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get("access_token");
    if (token) {
      localStorage.setItem("spotify_access_token", token);
      window.location.hash = "";
      return token;
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  extractTokenFromHash();
  initRouter();
});
