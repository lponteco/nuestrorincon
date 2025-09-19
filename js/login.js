document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  const nombre = document.getElementById("nombre").value;
  const password = document.getElementById("password").value;

  // Referencia al elemento de error
  const errorElement = document.getElementById("error");

  // Referencia al modal
  const modal = document.getElementById("customAlert");
  const closeBtn = document.querySelector(".close-btn");
  const acceptBtn = document.querySelector(".btn-accept");
  const alertMessage = document.getElementById("alertMessage");

  // Verifica si los datos son correctos
  if (nombre === "lauti" && password === "teamo") {
    errorElement.style.display = "none"; // Oculta el mensaje de error si la validación es correcta
    
    // Modifica el mensaje si lo deseas
    alertMessage.innerHTML = "¡Bienvenido! El universo preparó este rincón solo para nosotros✨";

    // Muestra el modal
    modal.style.display = "flex";

    // Cierra el modal cuando se hace clic en "Aceptar"
    acceptBtn.addEventListener("click", function() {
      modal.style.display = "none";
      window.location.href = "web/inicio.html"; // Redirige a index.html
    });

    // Cierra el modal cuando se hace clic en la X
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });

  } else {
    errorElement.style.display = "block"; // Muestra el mensaje de error si es incorrecto
  }
});





