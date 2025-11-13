/* código funcional que refleje su nombre notas
para tres materias el promedio de las materias y si aprobó o no aprobó con nota
minima 3.5 */

let nombre = "Camilo";

let notaMatematica = 4.0;
let notaHistoria = 3.0;
let notaCiencias = 4.5;

let promedio = (notaMatematica + notaHistoria + notaCiencias) / 3;

if (promedio >= 3.5) {
    console.log("Hola " + nombre + ", has aprobado con un promedio de " + promedio);
}
