
/* codigo click */
const enlace = document.getElementById("texto");

enlace.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

  // Obtener el texto del enlace
  const texto = enlace.textContent;

  // Crear un elemento de texto temporal
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;

  // Agregar el elemento temporal al DOM
  document.body.appendChild(elementoTemporal);

  // Seleccionar y copiar el texto en el elemento temporal
  elementoTemporal.select();
  document.execCommand("copy");

  // Eliminar el elemento temporal
  document.body.removeChild(elementoTemporal);

  // Cambiar el texto del enlace para indicar que se ha copiado
  enlace.textContent = "Texto copiado al portapapeles";
});
