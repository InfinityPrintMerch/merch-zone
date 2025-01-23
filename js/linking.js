// Función para agregar los botones a cada contenedor automáticamente
window.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box-a');

    boxes.forEach(function(box) {
        // Crear botón de expansión
        const expandButton = document.createElement('button');
        expandButton.classList.add('btn-expand-b');
        expandButton.innerHTML = '<i class="fa-solid fa-expand"></i>';
        expandButton.setAttribute("data-text", "FULLSCREEN"); // Agregar texto dinámico
        expandButton.onclick = function() { openModal(box); };

        // Crear botón de link
        const linkButton = document.createElement('button');
        linkButton.classList.add('btn-link-b');
        linkButton.innerHTML = '<i class="fa-solid fa-book-open"></i>';
        linkButton.setAttribute("data-text", "CATÁLOGO"); // Agregar texto dinámico
        linkButton.onclick = function() { openLink(box); };

        // Crear el nuevo "texto sin botón"
        const textIconButton = document.createElement('button');
        textIconButton.classList.add('btn-text-icon');
        textIconButton.innerHTML = '<i class="fa-solid fa-layer-group"></i>';

        // Obtener el número de diseños desde el atributo data-designs
        const designsCount = box.getAttribute('data-designs');

        // Si data-designs es igual a 1, cambiar el texto a "ÚNICO"
        const displayText = designsCount === '1' ? "ÚNICO" : `${designsCount} DISEÑOS`;

        // Establecer el texto dinámico con el número de diseños
        textIconButton.setAttribute("data-text", displayText);

        // Añadir los botones al contenedor
        box.appendChild(expandButton);
        box.appendChild(linkButton);
        box.appendChild(textIconButton);
    });
});

// Función para abrir el modal y cargar la imagen seleccionada
function openModal(box) {
    const imageSrc = box.getAttribute('data-image'); // Utiliza la propiedad del objeto directamente
    document.getElementById('modalImage-b').src = imageSrc;
    document.getElementById('imageModal-b').style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('imageModal-b').style.display = "none";
}
// Función para abrir el link desde el atributo data-link
function openLink(box) {
    const linkUrl = box.getAttribute('data-link');
    window.location.href = linkUrl;
}
