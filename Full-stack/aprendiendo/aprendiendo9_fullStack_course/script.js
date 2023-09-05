// Crear la tabla
const tabla = document.createElement('table');
tabla.classList.add('tabla');

// Llenar la tabla con celdas
for (let i = 0; i < 5; i++) {
  const fila = document.createElement('tr');
  for (let j = 0; j < 5; j++) {
    const celda = document.createElement('td');
    celda.textContent = `${i + 1},${j + 1}`; // Contenido de ejemplo
    celda.classList.add('celda-normal'); // Agregar clase de celda normal
    fila.appendChild(celda);
  }
  tabla.appendChild(fila);
}

// Agregar la tabla al documento
document.body.appendChild(tabla);
