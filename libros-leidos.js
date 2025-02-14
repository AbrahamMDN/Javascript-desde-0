//Declaro mi arreglo vacio
let librosLeidos = [];

//Decaro mi funcion agregarLibro

function agregarLibro(tituloLibro){
    librosLeidos.push(tituloLibro); //Agregamos un elemento al arreglo
}

agregarLibro("Under the DOM");
agregarLibro("Salem´s Lot");

console.log(librosLeidos); //Imprimimos el arreglo

//Mostrar los libros leidos

function mostrarlibrosLeidos(){
    for(let i=0; i < librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    }
}

mostrarlibrosLeidos();

agregarLibro("Misery")
agregarLibro("El Psicoanalista")

mostrarlibrosLeidos();