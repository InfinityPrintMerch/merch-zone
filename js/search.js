document.addEventListener("DOMContentLoaded", async () => {
    const searchBar = document.getElementById("search-bar");
    const catalogResults = document.querySelector(".container-b");
    const catalogSection = document.querySelector(".section-catalog");
    const paginationContainer = document.getElementById("pagination-container");
    const loadingMessage = document.getElementById("loading-message"); // Mensaje de carga
    let allProducts = [];
    let filteredProducts = [];
    let currentPage = 1;
    const itemsPerPage = 20;

    // 📌 1. Obtener lista de archivos JSON desde catalog/index.json
    async function getJSONFiles() {
        try {
            const response = await fetch("../json/index.json");
            if (!response.ok) throw new Error("No se pudo cargar index.json");
            const data = await response.json();
            return data.files;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    // 📌 2. Cargar todos los productos desde los archivos JSON
    async function loadAllProducts() {
        const files = await getJSONFiles();
        let loadedData = [];

        for (let file of files) {
            try {
                const response = await fetch(`../catalog/json/${file}`);
                if (!response.ok) throw new Error(`Error al cargar: ${file}`);
                const data = await response.json();
                loadedData = loadedData.concat(data);
            } catch (error) {
                console.error(error);
            }
        }

        allProducts = loadedData;
    }

    // 📌 3. Buscar productos según la palabra clave ingresada
    async function searchProducts(query) {
        loadingMessage.style.display = "block"; // Mostrar mensaje de carga
        currentPage = 1; // Reiniciar a la primera página

        if (allProducts.length === 0) await loadAllProducts(); // Cargar productos si no están cargados
        
        query = query.toLowerCase();
        filteredProducts = allProducts.filter(product => 
            product.keywords.toLowerCase().includes(query) || product.sku.toLowerCase().includes(query)
        );
        
        displayResults();
        loadingMessage.style.display = "none"; // Ocultar mensaje de carga
    }

    // 📌 4. Mostrar los resultados en la paginación
    function displayResults() {
        const resultsMessageContainer = document.getElementById("results-message-container");
        catalogResults.innerHTML = "";

        const totalItems = filteredProducts.length;

        // Mostrar el mensaje solo si hay resultados
        if (totalItems > 0) {
            const resultsMessage = document.createElement("div");
            resultsMessage.classList.add("results-message");
            resultsMessage.innerHTML = `Se han encontrado <strong>${totalItems}</strong> resultados.`;
            resultsMessageContainer.innerHTML = '';
            resultsMessageContainer.appendChild(resultsMessage);
        } else {
            resultsMessageContainer.innerHTML = '';
            catalogResults.innerHTML = "<div class='no-results'>No se encontraron resultados.</div>";
            return;
        }

        const start = (currentPage - 1) * itemsPerPage;
        const end = currentPage * itemsPerPage;
        const currentPageItems = filteredProducts.slice(start, end);

        currentPageItems.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("box-t");
            div.setAttribute("data-name", item.name);
            div.setAttribute("data-hot", item.hot);
            div.setAttribute("data-new", item.new);
            div.setAttribute("data-image", item.image);
            div.setAttribute("data-link", item.link);

            div.onclick = function () {
                window.location.href = `../catalog/design.html?image=${item.image}&name=${item.name}&link=${encodeURIComponent(item.link)}`;
            };

            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");
            const loader = document.createElement("div");
            loader.classList.add("loader");
            const img = document.createElement("img");
            img.classList.add("hover-img");
            img.src = item.image;
            img.style.opacity = 0;

            imgContainer.appendChild(loader);
            imgContainer.appendChild(img);
            const overlayText = document.createElement("p");
            overlayText.classList.add("overlay-text-b");
            overlayText.innerText = item.name;

            div.appendChild(imgContainer);
            div.appendChild(overlayText);
            catalogResults.appendChild(div);

            img.addEventListener("load", () => {
                img.style.opacity = 1;
                loader.style.display = "none";
            });

            img.addEventListener("error", (error) => {
                console.error("Error loading image:", item.image, error);
                loader.style.display = "none";
            });
        });

        updatePagination(totalItems);
        paginationContainer.style.display = "flex"; 
    }

    // 📌 5. Actualizar paginación
    function updatePagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const paginationContainer = document.querySelector(".pagination");
        const pageNumbersContainer = paginationContainer.querySelector(".page-numbers");
        pageNumbersContainer.innerHTML = "";

        let startPage, endPage;
        let maxPagesToShow = window.innerWidth <= 768 ? 3 : 4;

        if (totalPages <= maxPagesToShow) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 2) {
                startPage = 1;
                endPage = maxPagesToShow;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - (maxPagesToShow - 1);
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 2;
            }
        }

        const prevButton = paginationContainer.querySelector(".prev");
        prevButton.disabled = currentPage === 1;
        prevButton.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                displayResults();
            }
        };

        // Agregar primer botón de página
        if (startPage > 1) {
            const firstPageButton = document.createElement("button");
            firstPageButton.textContent = 1;
            firstPageButton.classList.add("page-number");
            firstPageButton.onclick = () => {
                currentPage = 1;
                displayResults();
            };
            pageNumbersContainer.appendChild(firstPageButton);

            if (startPage > 2) {
                const dots = document.createElement("span");
                dots.textContent = "...";
                pageNumbersContainer.appendChild(dots);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.classList.add("page-number");
            if (i === currentPage) pageButton.classList.add("active");
            pageButton.onclick = () => {
                currentPage = i;
                displayResults();
            };
            pageNumbersContainer.appendChild(pageButton);
        }

        if (endPage < totalPages) {
            const dots = document.createElement("span");
            dots.textContent = "...";
            pageNumbersContainer.appendChild(dots);
            const lastPageButton = document.createElement("button");
            lastPageButton.textContent = totalPages;
            lastPageButton.classList.add("page-number");
            lastPageButton.onclick = () => {
                currentPage = totalPages;
                displayResults();
            };
            pageNumbersContainer.appendChild(lastPageButton);
        }

        const nextButton = paginationContainer.querySelector(".next");
        nextButton.disabled = currentPage === totalPages;
        nextButton.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayResults();
            }
        };
    }

    // 📌 6. Detectar cambios en la barra de búsqueda
    searchBar.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const query = searchBar.value.trim();

            if (query.length > 0) {
                catalogSection.style.display = "none"; // Ocultar las categorías
                searchProducts(query); // Iniciar la búsqueda
            } else {
                catalogSection.style.display = "block"; // Mostrar las categorías cuando no hay búsqueda
                catalogResults.innerHTML = ""; // Limpiar resultados
                paginationContainer.style.display = "none"; // Ocultar paginación cuando no hay búsqueda
            }
        }
    });
});