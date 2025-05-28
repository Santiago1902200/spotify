import { renderMainView } from "./views/mainView.js";
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

function updateView(path) {
  const viewFunction = routes[path] || routes["/"];
  const appDiv = document.getElementById("app");
  const menuDiv = document.getElementById("menu");

  if (appDiv) appDiv.innerHTML = "";
  if (menuDiv) menuDiv.innerHTML = ""; // Lo dejas vacío si no necesitas renderMenuView

  const view = viewFunction();
  if (view) appDiv.appendChild(view);
}

export function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  updateView(path);
}

export function initRouter() {
  window.navigate = navigate;

  const initialPath = window.location.pathname;
  updateView(initialPath === "/" ? "/" : initialPath);

  window.onpopstate = () => updateView(window.location.pathname);
}
