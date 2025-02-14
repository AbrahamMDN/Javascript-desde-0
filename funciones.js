//Funciones

function Sumar(numero1, numero2){ //Palabra reservada function + parametros
    let total = numero1 + numero2;
    return total;
}

//Llamada a mi funcion
let resultado = Sumar(10,10);
// Return nos permite guardar el resultado en una variable

console.log(resultado);

console.log(Sumar(12,20));

Sumar(2,3); //Se ejecuta pero no se imprime

function Restar(a,b){
    let total = a-b;
    console.log(total); //Con console.log solo se imptime ene consola, no se guarda el resultado en una variable.
}
Restar(13,12);

function Casita(){
    let nombre = "Ana";
    let apellido = "Villanueva";
    console.log("Esta es una casita");
}
Casita();

//console.log(nombre);//No se puede acceder porque esta dentro de una funcion 
//Scope de bloque

let nombre = "Vanessa";
let edad = 23;
let ciudad ="Ciudad de Mexico"

console.log("Ella se llama " + nombre + " tiene " + edad + " años y vive en " + ciudad);

console.log(`Ella se llama ${nombre} tiene ${edad} años y vive en ${ciudad}`)//Ctrl + Alt + }
//Actualizacion de ES6 (2015)

//Pedir datos al usuario
let usuario = prompt("¿Cuál es tu nombre?");
let gatos = prompt("¿Cuantos gatos tienes?");
let perros = prompt("¿Cuantos perros tienes?");
let total = parseInt(gatos) + parseInt(perros); //Convertir strings a numeros
let total_2=Number(gatos) + Number(perros);//Convertir string a numero
//Vemos los datos en consola
console.log(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total} mascotas`);

//Vemos los datos en un pop up
alert(`${usuario} tiene ${gatos} y ${perros} perros. En total tiene ${total} mascotas`);

// En total tiene x mascotas

//Ejercicios clase
//Triangulo
