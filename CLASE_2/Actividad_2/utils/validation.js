// funcion para validar un correo electrónico

function validarEmail(email) {
  if (!email || email.trim() === "") {
    return "El campo de correo electrónico está vacío.";
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return "El correo electrónico no es válido.";
  }

  return "Correo electrónico válido.";
}

// Pruebas en consola
console.log(validarEmail("")); // Campo vacío
console.log(validarEmail("correo@invalido")); // Formato incorrecto
console.log(validarEmail("usuario@dominio.com")); // Correcto

module.exports = { validarEmail };
