window.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box-a, .box-t'); // Selecciona ambas clases

    boxes.forEach(function(box) {
        // Obtener el valor de data-image
        const imageUrl = box.getAttribute('data-image');

        // Asignar el valor de data-image al atributo src de la imagen
        const imgElement = box.querySelector('.hover-img');
        if (imgElement) {
            imgElement.src = imageUrl;
        }
    });
});
