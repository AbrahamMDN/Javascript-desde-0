//Programas para mostrar los multiplos de 4 hasta un numero dado por el usuario

let numero = 20;

let contador = 1;

while(contador <= numero){
    //codigo a iterar
    if(contador % 5 ===0){
        console.log(contador);
    }
    contador++; //Incremento del contador
}

console.log("Fin del programa");

//output

//Numeros impares
let numero2 = 35;

for(let indice = 0; indice <= numero2; indice++){
    if(indice % 2 !== 0){
        console.log(indice);
    }
}

console.log("Fin del programa");

//Imprimir los numeros del 1 al 10

let inicio = 0; //Inicialización

while(inicio <=10){ //Condición
    console.log(inicio); //Código a iterar
    inicio++;
}

console.log("Fin del programa");

for(let i=1; i <= 10; i++){
    console.log(i); //Imprimiendo el valor actual de i
}


//Un objeto

//Declarando mi objeto libro
const libro ={
    titulo : "Ready Player One",
    autor : "Ernest Cline",
    numeroPaginas : 374,
    editorial : "Crown Publishing Group"
}

//Pares de clave:valor

console.log(libro.editorial);

let libros = ["Cien años de soledad ", "Gabriel Garcia Marquez", 432,"Sudamericana"];

const frutas ={
    manzana: 3,
    platano: 4,
}