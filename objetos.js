//Forma 1: Definiendo un objeto libro y un método simple:
const libro = {
    titulo: "Under The Dome",
    autor: "Stephen King",
    año: 2009,
    estado: "disponible",
    numeroPaginas: 1136,
    editorial: "Debolsillo", 

    describirLibro: function() {
        return `El libro ${this.titulo} fue publicado en ${this.año} por la editorial ${this.editorial}. Fue escrito por ${this.autor}, cuenta con ${this.numeroPaginas} páginas y su estado actual es ${this.estado}.`;
    }
};

// Para usar el método:
console.log(libro.describirLibro());



//Forma 2: Definiendo Libro como una clase:
class Libro {
    constructor(titulo, autor, año, estado, numeroPaginas, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado;
        this.numeroPaginas = numeroPaginas;
        this.editorial = editorial;
        this.capitulos = []; // Array para almacenar los capítulos
    }
    
    describirLibro() {
        return `El libro ${this.titulo} fue publicado en ${this.año} por la editorial ${this.editorial}. Fue escrito por ${this.autor}, cuenta con ${this.numeroPaginas} páginas y su estado actual es ${this.estado}.`;
    }
    
    agregarCapitulo(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
        return `Capítulo ${nombreCapitulo} agregado. Total de capítulos: ${this.capitulos.length}`;
    }
    
    eliminarCapitulo(nombreCapitulo) {
        const indice = this.capitulos.indexOf(nombreCapitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            return `Capítulo ${nombreCapitulo} eliminado. Total de capítulos: ${this.capitulos.length}`;
        }
        return `El capítulo ${nombreCapitulo} no se encontró en el libro`;
    }
    
};

// Para usar el método:
const LibroNuevo = new Libro("Rayuela", "Julio Cortazar", "1963", "disponible", "736","Sudamericana");
console.log(LibroNuevo.describirLibro());

// Para agregar capítulos:
console.log(LibroNuevo.agregarCapitulo("¿Te gusta escribir?"));
console.log(LibroNuevo.agregarCapitulo("Toco tu boca"));

// Para eliminar capítulos:
console.log(LibroNuevo.eliminarCapitulo("Toco tu boca"));