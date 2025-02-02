document.getElementById('zoom-btn').addEventListener('click', function() {
    const productImage = document.getElementById('product-t-image');
    const popup = document.getElementById('popup-t');
    const popupImage = document.getElementById('popup-t-image');

    // Cambiar la imagen del pop-up con la del producto
    popupImage.src = productImage.src;

    // Mostrar el pop-up
    popup.style.display = 'flex';
});

// Cerrar el pop-up cuando se haga clic fuera de la imagen
document.getElementById('popup-t').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
