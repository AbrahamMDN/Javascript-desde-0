document.getElementById('comm-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Se evita que la página se recargue al enviar el formulario
    
    // Para obtener el texto del comentario y devolver un aviso si aun no lo hay
    const commentText = document.getElementById('nuevoComment').value;
    
    if (commentText.trim() === '') {
        alert('Por favor, escribe un comentario.');
        return;
    }

    // Para obtener la fecha y hora actual
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    
    // Para crear el comentario en HTML
    const commentSection = document.createElement('section');
    commentSection.classList.add('comment');

    commentSection.innerHTML = `
        <p>${commentText}</p>
        <section class="comment-footer">
            <span>${date} ${time}</span>
            <button class="delete-btn" onclick="deleteComment(this)">Eliminar</button>
        </section>
    `;
    
    // Para añadir el comentario a la sección de comentarios
    document.getElementById('comm-container').appendChild(commentSection);

    // Para limpiar el campo de texto
    document.getElementById('nuevoComment').value = '';
});

// Función para eliminar un comentario
function deleteComment(button) {
    const comment = button.closest('.comment');
    comment.remove();
}
