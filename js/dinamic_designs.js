window.onload = function() {
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const image = urlParams.get('image');
    const name = urlParams.get('name');
    const link = urlParams.get('link');
    const category = urlParams.get('category'); // Nuevo parámetro
    const vol = urlParams.get('vol'); // Nuevo parámetro

    // Asignar los valores a los elementos correspondientes en la página
    document.getElementById('product-image').src = image; // Imagen del producto
    document.getElementById('name').textContent = name;

    // Si hay un link de WhatsApp, establecerlo en el botón
    const whatsappButton = document.getElementById('me-interesa');
    if (whatsappButton) {
        whatsappButton.onclick = function() {
            const currentUrl = window.location.href; // Obtener la URL actual
            const encodedUrl = encodeURIComponent(currentUrl); // Codificar la URL para asegurarnos que sea válida

            // Crear el enlace de WhatsApp con el texto y la URL actual
            const whatsappLink = `https://api.whatsapp.com/send?phone=2411576300&text=Me%20interesa%20ver%20este%20diseño:%20${encodedUrl}`;

            // Redirigir a WhatsApp con el enlace generado
            window.location.href = whatsappLink;
        };
    }

    // Mostrar la categoría y el volumen (GYM / GYM VOL.1)
    if (category && vol) {
        const formattedCategory = category.toUpperCase();  // Convierte la categoría a mayúsculas
        const formattedVol = vol.toUpperCase()
                                 .replace(/_/g, ' ')  // Reemplaza todos los guiones bajos por espacios
                                 .replace(/VOL (\d+)/, 'VOL.$1');  // Asegura que haya un punto antes del número

        const categoryVolText = `${formattedCategory} / ${formattedVol}`;  // Formato final: GYM / GYM VOL.1

        // Asignamos el texto a un elemento específico
        const categoryVolElement = document.getElementById('category-vol');
        if (categoryVolElement) {
            categoryVolElement.textContent = categoryVolText;
        }
    }

    // Funcionalidad del zoom al hacer clic en el botón
    const zoomButton = document.getElementById('zoom-btn');
    if (zoomButton) {
        zoomButton.addEventListener('click', function() {
            openModal(image);
        });
    }

    // Función para abrir el modal y cargar la imagen seleccionada
    function openModal(imageSrc) {
        const modalImage = document.getElementById('modalImage-b');
        const imageModal = document.getElementById('imageModal-b');

        if (modalImage && imageModal) {
            modalImage.src = imageSrc;
            imageModal.style.display = "block";
        }
    }

    // Función para cerrar el modal
    window.closeModal = function() {
        const imageModal = document.getElementById('imageModal-b');
        if (imageModal) {
            imageModal.style.display = "none";
        }
    }
};