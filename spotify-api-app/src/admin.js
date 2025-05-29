import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
  console.log("Panel de administración cargado");

  // Verifica si el usuario está logueado (opcional)
  const { data: { user }, error } = await supabase.auth.getUser();

  if (!user) {
    alert("Acceso no autorizado");
    window.location.hash = "/login"; // redirige si no hay sesión
    return;
  }

  
});
