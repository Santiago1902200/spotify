import { renderMainView } from "./views/menuView.js"; // 🔄 actualizado
import { renderLoginView } from "./views/loginView.js";
import { renderSignupView } from "./views/signupView.js";
import { renderLoginFormView } from "./views/loginFormView.js";
import { renderCrudUsuarioView } from "./views/crudUsuarioView.js";

const routes = {
  "/": renderMainView,
  "/login": renderLoginView,
  "/loginForm": renderLoginFormView,
  "/signup": renderSignupView,
  "/crud-usuario": renderCrudUsuarioView,
};

function router() {
  const view = routes[window.location.hash.slice(1) || "/"];
  const app = document.getElementById("app");
  app.innerHTML = "";
  view().then(component => {
    app.appendChild(component);
  });
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
