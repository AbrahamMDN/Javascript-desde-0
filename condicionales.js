//Tipo de mascota = Gato, Perro, Hamster

//Condicionales (Jaula mediana, Jaula grande, Jaula pequeña)

let tipodeMascota = "Perro";

if (tipodeMascota === "Perro"){
    console.log("Si tienes un perro, necesitas la jaula grande")
} else if (tipodeMascota === "Gato"){
    console.log("Si tiene sun gato, necesitas la jaula mediana")
} else if (tipodeMascota === "Hamster"){
    console.log("Si tienes un hamster, necesitas la jaula pequeña")
} else {
    console.log("No contamos con jaula para esa mascota")
}

//Semaforo color = Rojo, amarillo, verde
//Rojo = Alto, Amarillo =Detente, Verde = Siga

let color = "Rojo";

if (color === "Rojo"){
    console.log("Alto")
} else if (color === "Amarillo"){
    console.log("Detente")
} else if (color === "Verde"){
    console.log("Siga")
} else {
    console.log("No aplica")
}

// Para poder obtener una beca

let creditos = 10;
let promedio = 7.5;

if(creditos >= 10 && promedio >= 8.5){
    console.log("Tienes derecho a una beca");
} else if (creditos < 10 && promedio >= 8.5){
    console.log("Te hacen falta creditos")
} else if (creditos >= 10 && promedio < 8.5){
    console.log("Tu promedio debe subir");
} else{
    console.log("No tienes derecho a una beca");
}