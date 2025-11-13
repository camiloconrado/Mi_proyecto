// function to handle API errors

function handleError(error) {
  console.error("Ocurrió un error:", error.message);
}

async function obtenerDatos() {
  try {
    // Simulación de llamada a una API
    throw new Error("Error de conexión");
  } catch (error) {
    handleError(error);
  }
}

// Prueba
obtenerDatos();

module.exports = { obtenerDatos, handleError };
