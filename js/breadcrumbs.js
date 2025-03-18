document.addEventListener('DOMContentLoaded', function() {
    // Función para obtener parámetros de la URL
    function getQueryParams(url) {
        const params = new URLSearchParams(url.split('?')[1]);
        let queryParams = {};
        for (let [key, value] of params) {
            queryParams[key] = value;
        }
        return queryParams;
    }

    // Función para decodificar el texto
    function decodeText(text) {
        if (!text) return '';
        return text
            .replace(/_/g, ' ')  // Reemplaza guiones bajos por espacios
            .replace(/\b\w/g, char => char.toUpperCase()); // Capitaliza la primera letra de cada palabra
    }

    // Función para detectar si es un dispositivo móvil
    function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    // Función para generar las migas de pan dinámicamente
    function generateBreadcrumbs() {
        const breadcrumbsContainer = document.getElementById('breadcrumbs');
        if (!breadcrumbsContainer) return; // Verifica si el contenedor existe

        const urlPath = window.location.pathname;
        const queryParams = getQueryParams(window.location.href);

        let breadcrumbs = [
            { name: "Inicio", url: "../index.html" },
            { name: "Catalogo", url: "../merch.html" }
        ];

        let categoryType = ""; // Variable para saber si es Playeras o Tazas

        // Detectar si estamos en la página de "Playeras"
        if (urlPath.includes('playeras')) {
            categoryType = "Playeras";
            breadcrumbs.push({ name: "Playeras", url: "../categories/playeras_catalogo.html" });
        }

        // Detectar si estamos en la página de "Tazas"
        if (urlPath.includes('tazas')) {
            categoryType = "Tazas";
            breadcrumbs.push({ name: "Tazas", url: "../categories/tazas_catalogo.html" });
        }

        // Detectar la categoría
        if (queryParams.category) {
            const categoryName = decodeText(queryParams.category);
            if (!categoryType) {
                categoryType = urlPath.includes('tazas') ? "Tazas" : "Playeras";
                breadcrumbs.push({ name: categoryType, url: `../categories/${categoryType.toLowerCase()}_catalogo.html` });
            }
            breadcrumbs.push({ name: categoryName, url: `../catalog/${categoryType.toLowerCase()}.html?category=${queryParams.category}` });

            if (queryParams.vol) {
                const volName = decodeText(queryParams.vol).replace(/vol/i, 'Vol.');
                breadcrumbs.push({
                    name: volName,
                    url: `../catalog/catalogo.html?category=${queryParams.category}&vol=${queryParams.vol}`
                });
            }
        }

        // Si hay un parámetro 'name' (nombre del diseño), lo agregamos como la última miga de pan
        if (queryParams.name) {
            breadcrumbs.push({ name: decodeText(queryParams.name), url: window.location.href });
        }

        // Si es móvil, tomar solo los últimos 2 elementos
        if (isMobile()) {
            breadcrumbs = breadcrumbs.slice(Math.max(breadcrumbs.length - 2, 0)); // Toma los últimos 2 elementos
            breadcrumbs.push({ name: "Movil", url: "#" }); // Agregar "Movil" al final
        }

        // Construir las migas de pan
        breadcrumbsContainer.innerHTML = '';
        breadcrumbs.forEach((item, index) => {
            const isLastItem = index === breadcrumbs.length - 1;

            const breadcrumbItem = document.createElement('span');

            if (!isLastItem) {
                breadcrumbItem.innerHTML = `<a href="${item.url}">${item.name}</a>`;
            } else {
                breadcrumbItem.innerHTML = `<span>${item.name}</span>`;
            }

            breadcrumbsContainer.appendChild(breadcrumbItem);

            // Si no es el último item, agregar el separador
            if (!isLastItem) {
                const separator = document.createElement('span');
                separator.classList.add('separator');
                separator.innerText = '>';
                breadcrumbsContainer.appendChild(separator);
            }
        });
    }

    // Llamar a la función para generar las migas de pan
    generateBreadcrumbs();
});