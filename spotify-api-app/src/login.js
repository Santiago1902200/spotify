import { supabase } from '../supabase.js'

export async function handleLogin() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { error, session } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert('Error al iniciar sesión: ' + error.message)
  } else {
    alert('Sesión iniciada correctamente')
    window.location.href = 'main.html'  // Cambia si tu archivo de inicio es otro
  }
}
