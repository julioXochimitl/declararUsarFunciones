/*Retarte a ti mismo
Un maestro quiere crear una rúbrica para calificar. La rúbrica es de 0 a 11.

Parte 1
Un estudiante aprueba si tiene una puntuación mayor o igual a 5. Cree una función que devuelva un valor booleano verdadero o falso.

Parte 2
Un estudiante tiene una calificación excelente si obtiene una puntuación superior a 8.
Agregue a su función para imprimir "Excelente" para puntuaciones superiores a 8.

parte 3
Un estudiante tiene una calificación perfecta si su puntaje es 11. Agregue a su función para imprimir "Perfecto" para un puntaje de 11.*/

(function (grad) {
  //comprobamos que el rango de edad sea correcto
if (grad <= 11 && grad >= 0) {
    if (grad >= 5) {
        console.log("Passed: " + true);
    } else {
        console.log("Passed: " + false);
    }

    if (grad >= 8 && grad < 11) {
        console.log("Excelent");
    }

    if (grad == 11) {
        console.log("Perfect");
    }
} else {
    console.log("Valor no aceptado.");
}
})(prompt("Ingresa calificación: "));
