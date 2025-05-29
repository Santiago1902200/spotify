import { supabase } from "./supabase.js";
import "./router.js"; // Ya incluye y gestiona el rendering por hash

document.addEventListener("DOMContentLoaded", async () => {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.hash = "/login";
  } else {
    window.location.hash = "/crud-usuario";
  }
});
