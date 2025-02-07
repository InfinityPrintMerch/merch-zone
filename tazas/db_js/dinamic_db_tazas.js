let currentPage = 1;
const itemsPerPage = 20; // 20 productos por página

// Función para cargar productos de una colección
const jsonPaths = {

san_valentin: {
  'amor_vol_1': 'json/san_valentin/amor_vol_1.json',
  'san_valentin_vol_1': 'json/san_valentin/san_valentin_vol_1.json',
  'san_valentin_vol_2': 'json/san_valentin/san_valentin_vol_2.json',
  'dragon_ball_vol_1': 'json/san_valentin/dragon_ball_vol_1.json',
  'dragon_ball_vol_2': 'json/san_valentin/dragon_ball_vol_2.json',
  'flork_vol_1': 'json/san_valentin/flork_vol_1.json',
  'flork_vol_2': 'json/san_valentin/flork_vol_2.json',
  'parejas_vol_1': 'json/san_valentin/parejas_vol_1.json',
  'stitch_vol_1': 'json/san_valentin/stitch_vol_1.json'
}
};

function loadProducts(category, volume) {
    const categoryPaths = jsonPaths[category];

    if (!categoryPaths) {
        alert('¡Diseños aún por cargar! x_x');
        return;
    }

    const jsonFilePath = categoryPaths[volume];

    if (!jsonFilePath) {
        alert('¡Colección no válida! +_+');
        return;
    }

    // Cargar el archivo JSON usando fetch
    fetch(jsonFilePath)
        .then(response => response.json())
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
                div.classList.add('box-h');
                div.setAttribute('data-name', item.name);
                div.setAttribute('data-hot', item.hot);
                div.setAttribute('data-new', item.new);
                div.setAttribute('data-date', item.date);
                div.setAttribute('data-image', item.image);
                div.setAttribute('data-link', item.link);

                // Crear un contenedor para la imagen con un loader
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('img-container-c');

                // Agregar un loader animado (spinner)
                const loader = document.createElement('div');
                loader.classList.add('loader');

                // Crear la imagen
                const img = document.createElement('img');
                img.classList.add('hover-img');
                img.src = item.image;
                img.style.display = 'none'; // Ocultamos la imagen al inicio

                // Cuando la imagen termine de cargar, mostramos la imagen y quitamos el loader
                img.onload = function () {
                    img.style.display = 'block';
                    loader.style.display = 'none';
                };

                // Agregar loader e imagen al contenedor de la imagen
                imgContainer.appendChild(loader);
                imgContainer.appendChild(img);

                // Crear el texto con el nombre del diseño
                const p = document.createElement('p');
                p.classList.add('overlay-text-h');
                p.innerText = item.name;

                // Crear el botón de expansión
                const expandButton = document.createElement('button');
                expandButton.classList.add('btn-expand-b');
                expandButton.innerHTML = '<i class="fa-solid fa-expand"></i>';
                expandButton.setAttribute("data-text", "FULLSCREEN");
                expandButton.onclick = function () {
                    openModal(item);
                };

                // Crear botón de link
                const whatsappButton = document.createElement('button');
                whatsappButton.classList.add('btn-whatsapp-b');
                whatsappButton.innerHTML = '<i class="fa-solid fa-star"></i>';
                whatsappButton.setAttribute("data-text", "!LO QUIERO!");

                whatsappButton.onclick = function () {
                    const urlParams = new URLSearchParams(window.location.search);
                    const category = urlParams.get('category');
                    const vol = urlParams.get('vol');

                    const image = item.image;
                    const name = item.name;
                    const link = item.link;

                    window.location.href = `design.html?image=${image}&name=${name}&link=${encodeURIComponent(link)}&category=${encodeURIComponent(category)}&vol=${encodeURIComponent(vol)}`;
                };

                // Añadir elementos al contenedor del diseño
                div.appendChild(imgContainer);
                div.appendChild(p);
                div.appendChild(expandButton);
                div.appendChild(whatsappButton);

                // Añadir el diseño al contenedor principal
                container.appendChild(div);
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

// Función para abrir el link desde el atributo data-link
function openLink(item) {
    const linkUrl = item.link; // Acceder a la propiedad 'link' del objeto item
    window.location.href = linkUrl; // Redirigir a la URL
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
