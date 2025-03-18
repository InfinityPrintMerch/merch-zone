let currentPage = 1;
const itemsPerPage = 20; // 20 productos por página
let currentCategory, currentVolume;

function buildJsonFilePath(category, volume) {
    return `json/${category}/${volume}.json`;
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
            const container = document.querySelector('.container-b');
            container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

            currentPageItems.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('box-t');
                div.setAttribute('data-name', item.name);
                div.setAttribute('data-hot', item.hot);
                div.setAttribute('data-new', item.new);
                div.setAttribute('data-date', item.date);
                div.setAttribute('data-image', item.image);
                div.setAttribute('data-link', item.link);

                div.onclick = function () {
                    const image = item.image;
                    const name = item.name;
                    const link = item.link;

                    window.location.href = `design.html?image=${image}&name=${name}&link=${encodeURIComponent(link)}&category=${encodeURIComponent(category)}&vol=${encodeURIComponent(volume)}`;
                };

                // Crear un contenedor para la imagen con un loader
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('img-container');

                // Agregar un loader animado (spinner)
                const loader = document.createElement('div');
                loader.classList.add('loader');

                // Crear la imagen
                const img = document.createElement('img');
                img.classList.add('hover-img');
                img.src = item.image;
                img.style.opacity = 0; // Ocultar la imagen inicialmente

                imgContainer.appendChild(loader);
                imgContainer.appendChild(img);

                // Crear el texto con el nombre del diseño
                const overlayText = document.createElement('p');
                overlayText.classList.add('overlay-text-b');
                overlayText.innerText = item.name;

                div.appendChild(imgContainer);
                div.appendChild(overlayText);

                container.appendChild(div);

                img.addEventListener('load', () => {
                    img.style.opacity = 1; // Fade in the image
                    loader.style.display = 'none'; // Hide the loader
                });

                img.addEventListener('error', (error) => {
                    console.error('Error loading image:', item.image, error);
                    loader.style.display = 'none'; // Hide loader on error
                });
            });

            // Actualizar la paginación
            updatePagination(totalItems);
        })
        
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

    // Ajuste para móviles: lógica de visualización
    if (window.innerWidth <= 768) {
        // Mostrar la primera página
        if (totalPages > 1) {
            const firstPageButton = document.createElement('button');
            firstPageButton.textContent = 1;
            firstPageButton.classList.add('page-number');
            if (currentPage === 1) {
                firstPageButton.classList.add('active');
            }
            firstPageButton.addEventListener('click', function () {
                currentPage = 1;
                loadProducts(currentCategory, currentVolume);
            });
            pageNumbersContainer.appendChild(firstPageButton);
        }

        let pageStart = Math.max(2, currentPage - 1); // Páginas a la izquierda de la página actual
        let pageEnd = Math.min(totalPages - 1, currentPage + 1); // Páginas a la derecha de la página actual

        // Agregar botones intermedios
        for (let i = pageStart; i <= pageEnd; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.classList.add('page-number');
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', function () {
                currentPage = i;
                loadProducts(currentCategory, currentVolume);
            });
            pageNumbersContainer.appendChild(pageButton);
        }

        // Agregar puntos si hay más páginas después
        if (pageEnd < totalPages - 1) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            pageNumbersContainer.appendChild(dots);
        }

        // Mostrar la última página
        if (totalPages > 1) {
            const lastPageButton = document.createElement('button');
            lastPageButton.textContent = totalPages;
            lastPageButton.classList.add('page-number');
            if (currentPage === totalPages) {
                lastPageButton.classList.add('active');
            }
            lastPageButton.addEventListener('click', function () {
                currentPage = totalPages;
                loadProducts(currentCategory, currentVolume);
            });
            pageNumbersContainer.appendChild(lastPageButton);
        }
    } else {
        // Modo desktop: lógica existente
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

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

// Función para obtener los parámetros de la URL
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

// Aquí irían las demás funciones que no han sido modificadas...