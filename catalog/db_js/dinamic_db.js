let currentPage = 1;
const itemsPerPage = 20; // 20 productos por página

// Función para cargar productos de una colección
function loadProducts(category, volume) {
    let jsonFilePath = '';

if (category === 'streetwear') {
  if (volume === 'streetwear_vol_1') {
    jsonFilePath = 'json/streetwear/streetwear_vol_1.json'; // Ruta para el volumen 1
} else if (volume === 'streetwear_vol_2') {
    jsonFilePath = 'json/streetwear/streetwear_vol_2.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_3') {
    jsonFilePath = 'json/streetwear/streetwear_vol_3.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_4') {
    jsonFilePath = 'json/streetwear/streetwear_vol_4.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_5') {
    jsonFilePath = 'json/streetwear/streetwear_vol_5.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_6') {
    jsonFilePath = 'json/streetwear/streetwear_vol_6.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_7') {
    jsonFilePath = 'json/streetwear/streetwear_vol_7.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_8') {
    jsonFilePath = 'json/streetwear/streetwear_vol_8.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_9') {
    jsonFilePath = 'json/streetwear/streetwear_vol_9.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_10') {
    jsonFilePath = 'json/streetwear/streetwear_vol_10.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_11') {
    jsonFilePath = 'json/streetwear/streetwear_vol_11.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_12') {
    jsonFilePath = 'json/streetwear/streetwear_vol_12.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_13') {
    jsonFilePath = 'json/streetwear/streetwear_vol_13.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_14') {
    jsonFilePath = 'json/streetwear/streetwear_vol_14.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_15') {
    jsonFilePath = 'json/streetwear/streetwear_vol_15.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_16') {
    jsonFilePath = 'json/streetwear/streetwear_vol_16.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_17') {
    jsonFilePath = 'json/streetwear/streetwear_vol_17.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_18') {
    jsonFilePath = 'json/streetwear/streetwear_vol_18.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_19') {
    jsonFilePath = 'json/streetwear/streetwear_vol_19.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_20') {
    jsonFilePath = 'json/streetwear/streetwear_vol_20.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_21') {
    jsonFilePath = 'json/streetwear/streetwear_vol_21.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_22') {
    jsonFilePath = 'json/streetwear/streetwear_vol_22.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_23') {
    jsonFilePath = 'json/streetwear/streetwear_vol_23.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_24') {
    jsonFilePath = 'json/streetwear/streetwear_vol_24.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_25') {
    jsonFilePath = 'json/streetwear/streetwear_vol_25.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_26') {
    jsonFilePath = 'json/streetwear/streetwear_vol_26.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_27') {
    jsonFilePath = 'json/streetwear/streetwear_vol_27.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_28') {
    jsonFilePath = 'json/streetwear/streetwear_vol_28.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_29') {
    jsonFilePath = 'json/streetwear/streetwear_vol_29.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_30') {
    jsonFilePath = 'json/streetwear/streetwear_vol_30.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_31') {
    jsonFilePath = 'json/streetwear/streetwear_vol_31.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_32') {
    jsonFilePath = 'json/streetwear/streetwear_vol_32.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_33') {
    jsonFilePath = 'json/streetwear/streetwear_vol_33.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_34') {
    jsonFilePath = 'json/streetwear/streetwear_vol_34.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_35') {
    jsonFilePath = 'json/streetwear/streetwear_vol_35.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_36') {
    jsonFilePath = 'json/streetwear/streetwear_vol_36.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_37') {
    jsonFilePath = 'json/streetwear/streetwear_vol_37.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_38') {
    jsonFilePath = 'json/streetwear/streetwear_vol_38.json'; // Ruta para el volumen 2
} else if (volume === 'streetwear_vol_39') {
    jsonFilePath = 'json/streetwear/streetwear_vol_39.json'; // Ruta para el volumen 2
} else {
            alert('¡Colección no válida!');
  return;
}

} else if (category === 'anime') {
  if (volume === 'akira_vol_1') {
    jsonFilePath = 'json/anime/akira_vol_1.json';
} else if (volume === 'angel_beats_vol_1') {
    jsonFilePath = 'json/anime/angel_beats_vol_1.json';
} else if (volume === 'anime_vol_1') {
    jsonFilePath = 'json/anime/anime_vol_1.json';
} else if (volume === 'girls_vol_1') {
    jsonFilePath = 'json/anime/girls_vol_1.json';
} else if (volume === 'anime_vol_2') {
    jsonFilePath = 'json/anime/anime_vol_2.json';
} else if (volume === 'anime_vol_3') {
    jsonFilePath = 'json/anime/anime_vol_3.json';
} else if (volume === 'anime_vol_4') {
    jsonFilePath = 'json/anime/anime_vol_4.json';
} else if (volume === 'exclusivos_vol_1') {
    jsonFilePath = 'json/anime/exclusivos_vol_1.json';
} else if (volume === 'exclusivos_vol_2') {
    jsonFilePath = 'json/anime/exclusivos_vol_2.json';
} else if (volume === 'exclusivos_vol_3') {
    jsonFilePath = 'json/anime/exclusivos_vol_3.json';
} else if (volume === 'exclusivos_vol_4') {
    jsonFilePath = 'json/anime/exclusivos_vol_4.json';
} else if (volume === 'exclusivos_vol_5') {
    jsonFilePath = 'json/anime/exclusivos_vol_5.json';
} else if (volume === 'exclusivos_vol_6') {
    jsonFilePath = 'json/anime/exclusivos_vol_6.json';
} else if (volume === 'exclusivos_vol_7') {
    jsonFilePath = 'json/anime/exclusivos_vol_7.json';
} else if (volume === 'exclusivos_vol_8') {
    jsonFilePath = 'json/anime/exclusivos_vol_8.json';
} else if (volume === 'exclusivos_vol_9') {
    jsonFilePath = 'json/anime/exclusivos_vol_9.json';
} else if (volume === 'exclusivos_vol_10') {
    jsonFilePath = 'json/anime/exclusivos_vol_10.json';
} else if (volume === 'exclusivos_vol_11') {
    jsonFilePath = 'json/anime/exclusivos_vol_11.json';
} else if (volume === 'exclusivos_vol_12') {
    jsonFilePath = 'json/anime/exclusivos_vol_12.json';
} else if (volume === 'exclusivos_vol_13') {
    jsonFilePath = 'json/anime/exclusivos_vol_13.json';
} else if (volume === 'exclusivos_vol_14') {
    jsonFilePath = 'json/anime/exclusivos_vol_14.json';
} else if (volume === 'exclusivos_vol_15') {
    jsonFilePath = 'json/anime/exclusivos_vol_15.json';
} else if (volume === 'exclusivos_vol_16') {
    jsonFilePath = 'json/anime/exclusivos_vol_16.json';
} else if (volume === 'exclusivos_vol_17') {
    jsonFilePath = 'json/anime/exclusivos_vol_17.json';
} else if (volume === 'exclusivos_vol_18') {
    jsonFilePath = 'json/anime/exclusivos_vol_18.json';
} else if (volume === 'exclusivos_vol_19') {
    jsonFilePath = 'json/anime/exclusivos_vol_19.json';
} else if (volume === 'exclusivos_vol_20') {
    jsonFilePath = 'json/anime/exclusivos_vol_20.json';
} else if (volume === 'exclusivos_vol_21') {
    jsonFilePath = 'json/anime/exclusivos_vol_21.json';
} else if (volume === 'exclusivos_vol_22') {
    jsonFilePath = 'json/anime/exclusivos_vol_22.json';
} else if (volume === 'exclusivos_vol_23') {
    jsonFilePath = 'json/anime/exclusivos_vol_23.json';
} else if (volume === 'exclusivos_vol_24') {
    jsonFilePath = 'json/anime/exclusivos_vol_24.json';
} else if (volume === 'exclusivos_vol_25') {
    jsonFilePath = 'json/anime/exclusivos_vol_25.json';
} else if (volume === 'exclusivos_vol_26') {
    jsonFilePath = 'json/anime/exclusivos_vol_26.json';
} else if (volume === 'exclusivos_vol_27') {
    jsonFilePath = 'json/anime/exclusivos_vol_27.json';
} else if (volume === 'exclusivos_vol_28') {
    jsonFilePath = 'json/anime/exclusivos_vol_28.json';
} else if (volume === 'exclusivos_vol_29') {
    jsonFilePath = 'json/anime/exclusivos_vol_29.json';
} else if (volume === 'exclusivos_vol_30') {
    jsonFilePath = 'json/anime/exclusivos_vol_30.json';
} else if (volume === 'exclusivos_vol_31') {
    jsonFilePath = 'json/anime/exclusivos_vol_31.json';
} else if (volume === 'exclusivos_vol_32') {
    jsonFilePath = 'json/anime/exclusivos_vol_32.json';
} else if (volume === 'exclusivos_vol_33') {
    jsonFilePath = 'json/anime/exclusivos_vol_33.json';
} else if (volume === 'exclusivos_vol_34') {
    jsonFilePath = 'json/anime/exclusivos_vol_34.json';
} else if (volume === 'exclusivos_vol_35') {
    jsonFilePath = 'json/anime/exclusivos_vol_35.json';
} else if (volume === 'exclusivos_vol_36') {
    jsonFilePath = 'json/anime/exclusivos_vol_36.json';
} else if (volume === 'exclusivos_vol_37') {
    jsonFilePath = 'json/anime/exclusivos_vol_37.json';
} else if (volume === 'exclusivos_vol_38') {
    jsonFilePath = 'json/anime/exclusivos_vol_38.json';
} else if (volume === 'exclusivos_vol_39') {
    jsonFilePath = 'json/anime/exclusivos_vol_39.json';
} else if (volume === 'exclusivos_vol_40') {
    jsonFilePath = 'json/anime/exclusivos_vol_40.json';
} else if (volume === 'exclusivos_vol_41') {
    jsonFilePath = 'json/anime/exclusivos_vol_41.json';
} else if (volume === 'exclusivos_vol_42') {
    jsonFilePath = 'json/anime/exclusivos_vol_42.json';
} else if (volume === 'exclusivos_vol_43') {
    jsonFilePath = 'json/anime/exclusivos_vol_43.json';
} else if (volume === 'exclusivos_vol_44') {
    jsonFilePath = 'json/anime/exclusivos_vol_44.json';
} else if (volume === 'exclusivos_vol_45') {
    jsonFilePath = 'json/anime/exclusivos_vol_45.json';
} else if (volume === 'exclusivos_vol_46') {
    jsonFilePath = 'json/anime/exclusivos_vol_46.json';
} else if (volume === 'exclusivos_vol_47') {
    jsonFilePath = 'json/anime/exclusivos_vol_47.json';
} else if (volume === 'exclusivos_vol_48') {
    jsonFilePath = 'json/anime/exclusivos_vol_48.json';
} else if (volume === 'exclusivos_vol_49') {
    jsonFilePath = 'json/anime/exclusivos_vol_49.json';
} else if (volume === 'exclusivos_vol_50') {
    jsonFilePath = 'json/anime/exclusivos_vol_50.json';
} else if (volume === 'exclusivos_vol_51') {
    jsonFilePath = 'json/anime/exclusivos_vol_51.json';
} else if (volume === 'exclusivos_vol_52') {
    jsonFilePath = 'json/anime/exclusivos_vol_52.json';
} else if (volume === 'exclusivos_vol_53') {
    jsonFilePath = 'json/anime/exclusivos_vol_53.json';
} else if (volume === 'exclusivos_vol_54') {
    jsonFilePath = 'json/anime/exclusivos_vol_54.json';
} else if (volume === 'exclusivos_vol_55') {
    jsonFilePath = 'json/anime/exclusivos_vol_55.json';
} else if (volume === 'exclusivos_vol_56') {
    jsonFilePath = 'json/anime/exclusivos_vol_56.json';
} else if (volume === 'exclusivos_vol_57') {
    jsonFilePath = 'json/anime/exclusivos_vol_57.json';
} else if (volume === 'exclusivos_vol_58') {
    jsonFilePath = 'json/anime/exclusivos_vol_58.json';
} else if (volume === 'exclusivos_vol_59') {
    jsonFilePath = 'json/anime/exclusivos_vol_59.json';
} else if (volume === 'exclusivos_vol_60') {
    jsonFilePath = 'json/anime/exclusivos_vol_60.json';
} else if (volume === 'exclusivos_vol_61') {
    jsonFilePath = 'json/anime/exclusivos_vol_61.json';
} else if (volume === 'exclusivos_vol_62') {
    jsonFilePath = 'json/anime/exclusivos_vol_62.json';
} else if (volume === 'exclusivos_vol_63') {
    jsonFilePath = 'json/anime/exclusivos_vol_63.json';
} else if (volume === 'exclusivos_vol_64') {
    jsonFilePath = 'json/anime/exclusivos_vol_64.json';
} else if (volume === 'exclusivos_vol_65') {
    jsonFilePath = 'json/anime/exclusivos_vol_65.json';
} else if (volume === 'exclusivos_vol_66') {
    jsonFilePath = 'json/anime/exclusivos_vol_66.json';
} else if (volume === 'exclusivos_vol_67') {
    jsonFilePath = 'json/anime/exclusivos_vol_67.json';
} else if (volume === 'exclusivos_vol_68') {
    jsonFilePath = 'json/anime/exclusivos_vol_68.json';
} else if (volume === 'exclusivos_vol_69') {
    jsonFilePath = 'json/anime/exclusivos_vol_69.json';
} else if (volume === 'exclusivos_vol_70') {
    jsonFilePath = 'json/anime/exclusivos_vol_70.json';
} else if (volume === 'exclusivos_vol_71') {
    jsonFilePath = 'json/anime/exclusivos_vol_71.json';
} else if (volume === 'exclusivos_vol_72') {
    jsonFilePath = 'json/anime/exclusivos_vol_72.json';
} else if (volume === 'exclusivos_vol_73') {
    jsonFilePath = 'json/anime/exclusivos_vol_73.json';
} else if (volume === 'exclusivos_vol_74') {
    jsonFilePath = 'json/anime/exclusivos_vol_74.json';
} else if (volume === 'exclusivos_vol_75') {
    jsonFilePath = 'json/anime/exclusivos_vol_75.json';
} else {
            alert('¡Colección no válida!');
            return;
        }
    } else {
        alert('¡Categoría no válida!');
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
                const whatsappButton = document.createElement('button');
                whatsappButton.classList.add('btn-whatsapp-b');
                whatsappButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
                whatsappButton.setAttribute("data-text", "COMPRAR");
                whatsappButton.onclick = function() { openLink(item); };

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

    // Botones de páginas
    for (let i = 1; i <= totalPages; i++) {
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
