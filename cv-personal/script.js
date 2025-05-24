function toggle(id) {
  const seccion = document.getElementById(id);
  
  if (seccion.style.display === "block") {
    seccion.style.display = "none"; // Oculta si ya estaba visible
  } else {
    seccion.style.display = "block"; // Muestra si estaba oculta
  }
}

function saluda() {
  const sonido = document.getElementById("sonido-perro");
  sonido.currentTime = 0; // Reinicia el sonido por si se hace clic varias veces
  sonido.play();
}