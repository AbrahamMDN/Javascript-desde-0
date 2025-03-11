// Definición del objeto libro y un método para desglosar su información
class Libro {
    constructor(titulo, autor, año, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado;
        this.fecha = new Date(); 
    }

    mostrarInfo() {
        
        const date = this.fecha.toLocaleDateString();
        const time = this.fecha.toLocaleTimeString();
        return `Libro: ${this.titulo} <br> Autor: ${this.autor} <br> Año: ${this.año} <br> Estado: ${this.estado} <br><br> <span>${date} ${time}</span>`;
    }
}

//Construcción de la lógica del sitio
document.getElementById('form-books').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const titulo = document.getElementById('title').value;
    const autor = document.getElementById("author").value;
    const año = document.getElementById("year").value;
    const estado = document.getElementById("availability").value;

    //Modificación del contenido HTML en las etiquetas para nueva información del formulario
    const commentSection = document.createElement('section');
    let newBook = new Libro(titulo, autor, año, estado);

    commentSection.innerHTML = newBook.mostrarInfo();

    document.getElementById('book-container').appendChild(commentSection);

    //Boton para eliminar etiquetas de libros
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const eliminateButton = document.createElement("button");
    eliminateButton.textContent = "Eliminar";
    eliminateButton.classList.add("eliminate-button");

    eliminateButton.addEventListener("click", function() {
        document.getElementById('book-container').removeChild(commentSection); 
    });

    buttonContainer.appendChild(eliminateButton);
    
    commentSection.appendChild(buttonContainer);
    
    document.getElementById('book-container').appendChild(commentSection);

    //Reinicio del formulario    
    document.getElementById('form-books').reset();
});