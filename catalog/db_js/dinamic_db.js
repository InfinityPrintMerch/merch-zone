let currentPage = 1;
const itemsPerPage = 20; // 20 productos por página

// Función para cargar productos de una colección
const jsonPaths = {
    streetwear: {
        'streetwear_vol_1': 'json/streetwear/streetwear_vol_1.json',
        'streetwear_vol_2': 'json/streetwear/streetwear_vol_2.json',
        'streetwear_vol_3': 'json/streetwear/streetwear_vol_3.json',
        'streetwear_vol_4': 'json/streetwear/streetwear_vol_4.json',
        'streetwear_vol_5': 'json/streetwear/streetwear_vol_5.json',
        'streetwear_vol_6': 'json/streetwear/streetwear_vol_6.json',
        'streetwear_vol_7': 'json/streetwear/streetwear_vol_7.json',
        'streetwear_vol_8': 'json/streetwear/streetwear_vol_8.json',
        'streetwear_vol_9': 'json/streetwear/streetwear_vol_9.json',
        'streetwear_vol_10': 'json/streetwear/streetwear_vol_10.json',
        'streetwear_vol_11': 'json/streetwear/streetwear_vol_11.json',
        'streetwear_vol_12': 'json/streetwear/streetwear_vol_12.json',
        'streetwear_vol_13': 'json/streetwear/streetwear_vol_13.json',
        'streetwear_vol_14': 'json/streetwear/streetwear_vol_14.json',
        'streetwear_vol_15': 'json/streetwear/streetwear_vol_15.json',
        'streetwear_vol_16': 'json/streetwear/streetwear_vol_16.json',
        'streetwear_vol_17': 'json/streetwear/streetwear_vol_17.json',
        'streetwear_vol_18': 'json/streetwear/streetwear_vol_18.json',
        'streetwear_vol_19': 'json/streetwear/streetwear_vol_19.json',
        'streetwear_vol_20': 'json/streetwear/streetwear_vol_20.json',
        'streetwear_vol_21': 'json/streetwear/streetwear_vol_21.json',
        'streetwear_vol_22': 'json/streetwear/streetwear_vol_22.json',
        'streetwear_vol_23': 'json/streetwear/streetwear_vol_23.json',
        'streetwear_vol_24': 'json/streetwear/streetwear_vol_24.json',
        'streetwear_vol_25': 'json/streetwear/streetwear_vol_25.json',
        'streetwear_vol_26': 'json/streetwear/streetwear_vol_26.json',
        'streetwear_vol_27': 'json/streetwear/streetwear_vol_27.json',
        'streetwear_vol_28': 'json/streetwear/streetwear_vol_28.json',
        'streetwear_vol_29': 'json/streetwear/streetwear_vol_29.json',
        'streetwear_vol_30': 'json/streetwear/streetwear_vol_30.json',
        'streetwear_vol_31': 'json/streetwear/streetwear_vol_31.json',
        'streetwear_vol_32': 'json/streetwear/streetwear_vol_32.json',
        'streetwear_vol_33': 'json/streetwear/streetwear_vol_33.json',
        'streetwear_vol_34': 'json/streetwear/streetwear_vol_34.json',
        'streetwear_vol_35': 'json/streetwear/streetwear_vol_35.json',
        'streetwear_vol_36': 'json/streetwear/streetwear_vol_36.json',
        'streetwear_vol_37': 'json/streetwear/streetwear_vol_37.json',
        'streetwear_vol_38': 'json/streetwear/streetwear_vol_38.json',
        'streetwear_vol_39': 'json/streetwear/streetwear_vol_39.json'
    },
    anime: {
      'akira_vol_1': 'json/anime/akira_vol_1.json',
      'angel_beats_vol_1': 'json/anime/angel_beats_vol_1.json',
      'anime_vol_1': 'json/anime/anime_vol_1.json',
      'girls_vol_1': 'json/anime/girls_vol_1.json',
      'anime_vol_2': 'json/anime/anime_vol_2.json',
      'anime_vol_3': 'json/anime/anime_vol_3.json',
      'anime_vol_4': 'json/anime/anime_vol_4.json',
      'exclusivos_vol_1': 'json/anime/exclusivos_vol_1.json',
      'exclusivos_vol_2': 'json/anime/exclusivos_vol_2.json',
      'exclusivos_vol_3': 'json/anime/exclusivos_vol_3.json',
      'exclusivos_vol_4': 'json/anime/exclusivos_vol_4.json',
      'exclusivos_vol_5': 'json/anime/exclusivos_vol_5.json',
      'exclusivos_vol_6': 'json/anime/exclusivos_vol_6.json',
      'exclusivos_vol_7': 'json/anime/exclusivos_vol_7.json',
      'exclusivos_vol_8': 'json/anime/exclusivos_vol_8.json',
      'exclusivos_vol_9': 'json/anime/exclusivos_vol_9.json',
      'exclusivos_vol_10': 'json/anime/exclusivos_vol_10.json',
      'exclusivos_vol_11': 'json/anime/exclusivos_vol_11.json',
      'exclusivos_vol_12': 'json/anime/exclusivos_vol_12.json',
      'exclusivos_vol_13': 'json/anime/exclusivos_vol_13.json',
      'exclusivos_vol_14': 'json/anime/exclusivos_vol_14.json',
      'exclusivos_vol_15': 'json/anime/exclusivos_vol_15.json',
      'exclusivos_vol_16': 'json/anime/exclusivos_vol_16.json',
      'exclusivos_vol_17': 'json/anime/exclusivos_vol_17.json',
      'exclusivos_vol_18': 'json/anime/exclusivos_vol_18.json',
      'exclusivos_vol_19': 'json/anime/exclusivos_vol_19.json',
      'exclusivos_vol_20': 'json/anime/exclusivos_vol_20.json',
      'exclusivos_vol_21': 'json/anime/exclusivos_vol_21.json',
      'exclusivos_vol_22': 'json/anime/exclusivos_vol_22.json',
      'exclusivos_vol_23': 'json/anime/exclusivos_vol_23.json',
      'exclusivos_vol_24': 'json/anime/exclusivos_vol_24.json',
      'exclusivos_vol_25': 'json/anime/exclusivos_vol_25.json',
      'exclusivos_vol_26': 'json/anime/exclusivos_vol_26.json',
      'exclusivos_vol_27': 'json/anime/exclusivos_vol_27.json',
      'exclusivos_vol_28': 'json/anime/exclusivos_vol_28.json',
      'exclusivos_vol_29': 'json/anime/exclusivos_vol_29.json',
      'exclusivos_vol_30': 'json/anime/exclusivos_vol_30.json',
      'exclusivos_vol_31': 'json/anime/exclusivos_vol_31.json',
      'exclusivos_vol_32': 'json/anime/exclusivos_vol_32.json',
      'exclusivos_vol_33': 'json/anime/exclusivos_vol_33.json',
      'exclusivos_vol_34': 'json/anime/exclusivos_vol_34.json',
      'exclusivos_vol_35': 'json/anime/exclusivos_vol_35.json',
      'exclusivos_vol_36': 'json/anime/exclusivos_vol_36.json',
      'exclusivos_vol_37': 'json/anime/exclusivos_vol_37.json',
      'exclusivos_vol_38': 'json/anime/exclusivos_vol_38.json',
      'exclusivos_vol_39': 'json/anime/exclusivos_vol_39.json',
      'exclusivos_vol_40': 'json/anime/exclusivos_vol_40.json',
      'exclusivos_vol_41': 'json/anime/exclusivos_vol_41.json',
      'exclusivos_vol_42': 'json/anime/exclusivos_vol_42.json',
      'exclusivos_vol_43': 'json/anime/exclusivos_vol_43.json',
      'exclusivos_vol_44': 'json/anime/exclusivos_vol_44.json',
      'exclusivos_vol_45': 'json/anime/exclusivos_vol_45.json',
      'exclusivos_vol_46': 'json/anime/exclusivos_vol_46.json',
      'exclusivos_vol_47': 'json/anime/exclusivos_vol_47.json',
      'exclusivos_vol_48': 'json/anime/exclusivos_vol_48.json',
      'exclusivos_vol_49': 'json/anime/exclusivos_vol_49.json',
      'exclusivos_vol_50': 'json/anime/exclusivos_vol_50.json',
      'exclusivos_vol_51': 'json/anime/exclusivos_vol_51.json',
      'exclusivos_vol_52': 'json/anime/exclusivos_vol_52.json',
      'exclusivos_vol_53': 'json/anime/exclusivos_vol_53.json',
      'exclusivos_vol_54': 'json/anime/exclusivos_vol_54.json',
      'exclusivos_vol_55': 'json/anime/exclusivos_vol_55.json',
      'exclusivos_vol_56': 'json/anime/exclusivos_vol_56.json',
      'exclusivos_vol_57': 'json/anime/exclusivos_vol_57.json',
      'exclusivos_vol_58': 'json/anime/exclusivos_vol_58.json',
      'exclusivos_vol_59': 'json/anime/exclusivos_vol_59.json',
      'exclusivos_vol_60': 'json/anime/exclusivos_vol_60.json',
      'exclusivos_vol_61': 'json/anime/exclusivos_vol_61.json',
      'exclusivos_vol_62': 'json/anime/exclusivos_vol_62.json',
      'exclusivos_vol_63': 'json/anime/exclusivos_vol_63.json',
      'exclusivos_vol_64': 'json/anime/exclusivos_vol_64.json',
      'exclusivos_vol_65': 'json/anime/exclusivos_vol_65.json',
      'exclusivos_vol_66': 'json/anime/exclusivos_vol_66.json',
      'exclusivos_vol_67': 'json/anime/exclusivos_vol_67.json',
      'exclusivos_vol_68': 'json/anime/exclusivos_vol_68.json',
      'exclusivos_vol_69': 'json/anime/exclusivos_vol_69.json',
      'exclusivos_vol_70': 'json/anime/exclusivos_vol_70.json',
      'exclusivos_vol_71': 'json/anime/exclusivos_vol_71.json',
      'exclusivos_vol_72': 'json/anime/exclusivos_vol_72.json',
      'exclusivos_vol_73': 'json/anime/exclusivos_vol_73.json',
      'exclusivos_vol_74': 'json/anime/exclusivos_vol_74.json',
      'exclusivos_vol_75': 'json/anime/exclusivos_vol_75.json'
    },
    urbanos: {
        'urbanos_vol_1': 'json/urbanos/urbanos_vol_1.json',
        'urbanos_vol_2': 'json/urbanos/urbanos_vol_2.json',
        'urbanos_vol_3': 'json/urbanos/urbanos_vol_3.json',
        'urbanos_vol_4': 'json/urbanos/urbanos_vol_4.json',
        'urbanos_vol_5': 'json/urbanos/urbanos_vol_5.json',
        'urbanos_vol_6': 'json/urbanos/urbanos_vol_6.json',
        'urbanos_vol_7': 'json/urbanos/urbanos_vol_7.json',
        'urbanos_vol_8': 'json/urbanos/urbanos_vol_8.json',
        'urbanos_vol_9': 'json/urbanos/urbanos_vol_9.json',
        'urbanos_vol_10': 'json/urbanos/urbanos_vol_10.json',
        'urbanos_vol_11': 'json/urbanos/urbanos_vol_11.json',
        'urbanos_vol_12': 'json/urbanos/urbanos_vol_12.json',
        'urbanos_vol_13': 'json/urbanos/urbanos_vol_13.json',
        'urbanos_vol_14': 'json/urbanos/urbanos_vol_14.json',
        'urbanos_vol_15': 'json/urbanos/urbanos_vol_15.json',
        'urbanos_vol_16': 'json/urbanos/urbanos_vol_16.json',
        'urbanos_vol_17': 'json/urbanos/urbanos_vol_17.json',
        'urbanos_vol_18': 'json/urbanos/urbanos_vol_18.json',
        'urbanos_vol_19': 'json/urbanos/urbanos_vol_19.json',
        'urbanos_vol_20': 'json/urbanos/urbanos_vol_20.json',
        'urbanos_vol_21': 'json/urbanos/urbanos_vol_21.json',
        'urbanos_vol_22': 'json/urbanos/urbanos_vol_22.json',
        'urbanos_vol_23': 'json/urbanos/urbanos_vol_23.json',
        'urbanos_vol_24': 'json/urbanos/urbanos_vol_24.json',
        'urbanos_vol_25': 'json/urbanos/urbanos_vol_25.json',
        'urbanos_vol_26': 'json/urbanos/urbanos_vol_26.json',
        'urbanos_vol_27': 'json/urbanos/urbanos_vol_27.json',
        'urbanos_vol_28': 'json/urbanos/urbanos_vol_28.json',
        'urbanos_vol_29': 'json/urbanos/urbanos_vol_29.json',
        'urbanos_vol_30': 'json/urbanos/urbanos_vol_30.json',
        'urbanos_vol_31': 'json/urbanos/urbanos_vol_31.json',
        'urbanos_vol_32': 'json/urbanos/urbanos_vol_32.json',
        'urbanos_vol_33': 'json/urbanos/urbanos_vol_33.json',
        'urbanos_vol_34': 'json/urbanos/urbanos_vol_34.json',
        'urbanos_vol_35': 'json/urbanos/urbanos_vol_35.json',
        'urbanos_vol_36': 'json/urbanos/urbanos_vol_36.json',
        'urbanos_vol_37': 'json/urbanos/urbanos_vol_37.json',
        'urbanos_vol_38': 'json/urbanos/urbanos_vol_38.json',
        'urbanos_vol_39': 'json/urbanos/urbanos_vol_39.json',
        'urbanos_vol_40': 'json/urbanos/urbanos_vol_40.json',
        'urbanos_vol_41': 'json/urbanos/urbanos_vol_41.json',
        'urbanos_vol_42': 'json/urbanos/urbanos_vol_42.json',
        'urbanos_vol_43': 'json/urbanos/urbanos_vol_43.json',
        'urbanos_vol_44': 'json/urbanos/urbanos_vol_44.json',
        'urbanos_vol_45': 'json/urbanos/urbanos_vol_45.json',
        'urbanos_vol_46': 'json/urbanos/urbanos_vol_46.json'
},
gym: {
  'gym_vol_1': 'json/gym/gym_vol_1.json',
  'gym_vol_2': 'json/gym/gym_vol_2.json',
  'gym_vol_3': 'json/gym/gym_vol_3.json',
  'gym_vol_4': 'json/gym/gym_vol_4.json',
  'gym_vol_5': 'json/gym/gym_vol_5.json'
},
calacas: {
  'calacas_vol_1': 'json/calacas/calacas_vol_1.json',
  'calacas_vol_2': 'json/calacas/calacas_vol_2.json',
  'calacas_vol_3': 'json/calacas/calacas_vol_3.json',
  'calacas_vol_4': 'json/calacas/calacas_vol_4.json',
  'calacas_vol_5': 'json/calacas/calacas_vol_5.json',
  'calacas_vol_6': 'json/calacas/calacas_vol_6.json',
  'calacas_vol_7': 'json/calacas/calacas_vol_7.json'
},
san_valentin: {
  'san_valentin_vol_1': 'json/san_valentin/san_valentin_vol_1.json',
  'san_valentin_vol_2': 'json/san_valentin/san_valentin_vol_2.json',
  'san_valentin_vol_3': 'json/san_valentin/san_valentin_vol_3.json',
  'among_us_vol_1': 'json/san_valentin/among_us_vol_1.json',
  'aesthetic_vol_1': 'json/san_valentin/aesthetic_vol_1.json',
  'caligrama_vol_1': 'json/san_valentin/caligrama_vol_1.json',
  'groovy_vol_1': 'json/san_valentin/groovy_vol_1.json',
  'parejas_vol_1': 'json/san_valentin/parejas_vol_1.json',
  'parejas_vol_2': 'json/san_valentin/parejas_vol_2.json',
  'parejas_vol_3': 'json/san_valentin/parejas_vol_3.json',
  'parejas_vol_4': 'json/san_valentin/parejas_vol_4.json'
}
};

function loadProducts(category, volume) {
    const categoryPaths = jsonPaths[category];

    if (!categoryPaths) {
        alert('¡Diseños aun por cargar! x_x');
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

                // Crear la imagen y el texto para cada diseño
                const img = document.createElement('img');
                img.classList.add('hover-img');
                img.src = item.image;

                const p = document.createElement('p');
                p.classList.add('overlay-text-b');
                p.innerText = item.name;

                // Crear el botón de expansión
                const expandButton = document.createElement('button');
                expandButton.classList.add('btn-expand-b');
                expandButton.innerHTML = '<i class="fa-solid fa-expand"></i>';
                expandButton.setAttribute("data-text", "FULLSCREEN");

                // Lógica del botón al hacer clic
                expandButton.onclick = function() { openModal(item); };

                // Crear botón de link

                // Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const vol = urlParams.get('vol');

// Verifica si se obtuvieron correctamente los valores
console.log(`Category: ${category}, Vol: ${vol}`);

const whatsappButton = document.createElement('button');
whatsappButton.classList.add('btn-whatsapp-b');
whatsappButton.innerHTML = '<i class="fa-solid fa-star"></i>';
whatsappButton.setAttribute("data-text", "!LO QUIERO!");

whatsappButton.onclick = function() {
// Obtener los valores de la URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const vol = urlParams.get('vol');

// Construir la URL con los parámetros obtenidos de la URL
const sku = item.sku;
const image = item.image;
const name = item.name;
const link = item.link;

// Redirigir a la página 'design.html' con los parámetros de la URL y los datos del item
window.location.href = `design.html?image=${image}&name=${name}&link=${encodeURIComponent(link)}&category=${encodeURIComponent(category)}&vol=${encodeURIComponent(vol)}`;
};






                // Añadir la imagen y el texto al contenedor del diseño
                div.appendChild(img);
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
