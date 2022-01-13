//Sala 6

/*Antes de cada ejercicio, asegúrese de pensar en los 4 pasos de una función.

1. Comprender el propósito de la función.
2. ¡Defina los datos que entran en la función desde la persona que llama (en forma de parámetros)!
3. Defina qué variables de datos se necesitan dentro de la función para lograr su objetivo.
4. Decida el conjunto de pasos que utilizará el programa para lograr este objetivo (el algoritmo).
Comience a codificar su respuesta una vez que haya completado el paso 4.*/

/*Ejercicio 1
María tiene que calcular el costo de sus pagos del mes. Por cada transacción hay una tarifa de $3 y una tarifa de interés del 0,1% (0,01). ¿Puedes ayudarla a calcular sus costos?

Devuélvele el valor de lo que debería estar pagando.*/

function transaccion(){
    var tran = prompt("Dame cuantas transacciones hiciste?");
    var costo = prompt("Dame el costo total de las transacciones");

    var resultado = (tran * 3) + (costo * 1.01);

    alert(resultado);

}

// transaccion();


/*Parte 1
A Ed le gustaría una forma de ingresar 3 nombres de sus amigos. El resultado debería ser un saludo de consola para sus amigos diciendo: Bienvenido {nombre1}, {nombre2}, {nombre3}.
*/

function saludar(){
    var nombres = {
        nom1: prompt("Nombre 1: "), nom2: prompt("Nombre 2"), nom3: prompt("Nombre 3")
    }
    

    console.log("Welcome " +nombres.nom1+ ", " +nombres.nom2+ ", " +nombres.nom3);
}

// saludar();

/*
Parte 2
A Ed le gustaría crear una función que tome un año de nacimiento y devuelva la edad.

es decir, 1990 devuelve 30
*/

function edad(){
    var anio = prompt("Dame tu fecha de nacimiento: ");
    var edad =  2022 - anio;

    alert(anio+" returns "+edad);
}

// edad();

/*

parte 3
A Ed le gustaría crear una función que imprima, Bienvenido {nombre1},
eres {edad1}. Bienvenido {name2}, eres {age2}. Bienvenido {name3}, eres {age3}.*/

function welcome(){
    var nombres = {
        nom1: prompt("Nombre: "),
        nom2: prompt("Nombre2: "),
        nom3: prompt("Nombre3: ")
    }
    var edades = {
        edad1: prompt("Edad: "),
        edad2: prompt("Edad2: "),
        edad3: prompt("Edad3: ")
    }

    console.log("Welcome " +nombres.nom1+ ", " +edades.edad1+ ".  Welcome " +nombres.nom2+ ", " +edades.edad2+ ". Welcome " +nombres.nom3+ ", " +edades.edad3+ ". ");
}

// welcome();