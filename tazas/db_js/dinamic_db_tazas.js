let currentPage = 1;
const itemsPerPage = 20; // 20 productos por página
let currentCategory, currentVolume;

function buildJsonFilePath(category, volume) {
    return `json/data_base/${category}/${volume}.json`;
}

function loadProducts(category, volume) {
    // Construir la ruta del archivo JSON
    const jsonFilePath = buildJsonFilePath(category, volume);

    // Cargar el archivo JSON usando fetch
    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching ${jsonFilePath}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data || data.length === 0) {
                alert('No hay productos disponibles para esta colección.');
                return;
            }

            // Paginación: filtrar los elementos según la página actual
            const totalItems = data.length;
            const start = (currentPage - 1) * itemsPerPage;
            const end = currentPage * itemsPerPage;
            const currentPageItems = data.slice(start, end);

            // Mostrar los productos
            const container = document.querySelector('.container-c');
            container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

            currentPageItems.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('box-h'); // Manteniendo la clase 'box-h'
                div.setAttribute('data-name', item.name);
                div.setAttribute('data-hot', item.hot);
                div.setAttribute('data-new', item.new);
                div.setAttribute('data-date', item.date);
                div.setAttribute('data-image', item.image);
                div.setAttribute('data-link', item.link);
            
                // Cambiamos la lógica para que al hacer clic redirija a una nueva página
                div.onclick = function () {
                    const image = item.image;
                    const name = item.name;
                    const link = item.link;
            
                    window.location.href = `design.html?image=${image}&name=${name}&link=${encodeURIComponent(link)}&category=${encodeURIComponent(category)}&vol=${encodeURIComponent(volume)}`;
                };
            
                // Crear un contenedor para la imagen con un loader
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('img-container-c'); // Manteniendo la clase 'img-container-c'
            
                // Agregar un loader animado (spinner)
                const loader = document.createElement('div');
                loader.classList.add('loader');
            
                // Crear la imagen
                const img = document.createElement('img');
                img.classList.add('hover-img');
                img.src = item.image;
                img.style.opacity = 0; // Ocultar la imagen inicialmente
            
                // Agregar loader e imagen al contenedor de la imagen
                imgContainer.appendChild(loader);
                imgContainer.appendChild(img);
            
                // Crear el texto con el nombre del diseño
                const overlayText = document.createElement('p');
                overlayText.classList.add('overlay-text-h'); // Manteniendo la clase 'overlay-text-h'
                overlayText.innerText = item.name;
            
                // Añadir elementos al contenedor del diseño
                div.appendChild(imgContainer);
                div.appendChild(overlayText);
            
                // Añadir el diseño al contenedor principal
                container.appendChild(div);
            
                // Cargar evento de la imagen después de añadirla al DOM
                img.addEventListener('load', () => {
                    img.style.opacity = 1; // Fade in the image
                    loader.style.display = 'none'; // Hide the loader
                });
            
                // Manejo de errores en la carga de la imagen
                img.addEventListener('error', (error) => {
                    console.error('Error loading image:', item.image, error);
                    loader.style.display = 'none'; // Hide loader on error
                });
            });

            // Actualizar la paginación
            updatePagination(totalItems);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
            alert('Hubo un error al cargar los productos.');
        });
}

// Función para abrir el modal y cargar la imagen seleccionada
function openModal(item) {
    const imageSrc = item.image;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

// Función para actualizar los botones de paginación
function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    const pageNumbersContainer = paginationContainer.querySelector('.page-numbers');
    pageNumbersContainer.innerHTML = ''; // Limpiar los botones de paginación

    // Botón de "Anterior"
    const prevButton = paginationContainer.querySelector('.prev');
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            loadProducts(currentCategory, currentVolume); // Volver a cargar productos de la nueva página
        }
    });

    // Determinar la cantidad de páginas a mostrar según el ancho de pantalla
    let maxPagesToShow = window.innerWidth <= 768 ? 3 : 14;

    // Calcular el rango de páginas a mostrar
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Ajustar si estamos cerca del inicio o el final
    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Botones de páginas
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('page-number');
        if (i === currentPage) {
            pageButton.classList.add('active');
        }

        pageButton.addEventListener('click', function () {
            currentPage = i;
            loadProducts(currentCategory, currentVolume); // Volver a cargar productos de la nueva página
        });

        pageNumbersContainer.appendChild(pageButton);
    }

    // Botón de "Siguiente"
    const nextButton = paginationContainer.querySelector('.next');
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            loadProducts(currentCategory, currentVolume); // Volver a cargar productos de la nueva página
        }
    });
}

// Obtener los parámetros de la URL
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Cuando la página esté cargada, procesamos los parámetros de la URL
window.addEventListener('DOMContentLoaded', function () {
    const category = getURLParameter('category');
    const volume = getURLParameter('vol');

    if (category && volume) {
        currentCategory = category;
        currentVolume = volume;
        loadProducts(category, volume);
    } else {
        alert('Faltan parámetros de categoría o volumen.');
    }
});