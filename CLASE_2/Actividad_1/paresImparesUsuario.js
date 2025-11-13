/* código funcional que nos muestre en consola si los
números que digitamos son pares o impares */

// Importamos la librería para leer datos desde la consola
const readline = require('readline');

// Creamos una interfaz para capturar la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para verificar si un número es par o impar
function verificarNumero(num) {
  if (num % 2 === 0) {
    console.log(`El número ${num} es PAR `);
  } else {
    console.log(`El número ${num} es IMPAR `);
  }
}

// Pedimos al usuario que digite un número
rl.question('Digite un número: ', (respuesta) => {
  const numero = parseInt(respuesta);

  // Validamos si realmente digitó un número
  if (isNaN(numero)) {
    console.log('Por favor, ingrese un número válido');
  } else {
    verificarNumero(numero);
  }

  rl.close(); // Cerramos la interfaz
});
