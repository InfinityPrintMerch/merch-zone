document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 15;
    const productContainer = document.getElementById('productContainer');
    const paginationContainers = document.querySelectorAll('.pagination');
    const noResultsMessage = document.getElementById("no-results");
    const bannerSection = document.getElementById('bannerSection');
    const catalogSection = document.getElementById('catalog-section');

    // Filtro y ordenamiento elementos del DOM
    const filterBtn = document.getElementById("filter-btn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const resetBtn = document.getElementById("reset-btn"); // Botón de limpiar filtro
    const searchBar = document.getElementById("search-bar"); // Agrega el search bar al ámbito

    let allItems = [];
    let filteredItems = [];
    let totalPages;
    let currentPage = 1;

    function getUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
            category: urlParams.get('category'),
            vol: urlParams.get('vol')
        };
    }

    function insertarEtiquetas(box) {
        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('tags-container');
        box.prepend(tagsContainer);

        if (box.getAttribute("data-hot") === "true") {
            const hotTag = document.createElement('span');
            hotTag.classList.add('hot-tag', 'hot');
            hotTag.innerHTML = '<i class="fa-solid fa-fire"></i><span>HOT</span>';
            tagsContainer.appendChild(hotTag);
        }

        if (box.getAttribute("data-new") === "true") {
            const newTag = document.createElement('span');
            newTag.classList.add('hot-tag', 'new');
            newTag.innerHTML = '<i class="fa-solid fa-star"></i><span>NEW</span>';
            tagsContainer.appendChild(newTag);
        }

        if (box.getAttribute("data-bestseller") === "true") {
            const bestsellerTag = document.createElement('span');
            bestsellerTag.classList.add('hot-tag', 'bestseller');
            bestsellerTag.innerHTML = '<i class="fa-solid fa-thumbs-up"></i><span>BESTSELLER</span>';
            tagsContainer.appendChild(bestsellerTag);
        }
    }

    function añadirEtiquetasAFiltros() {
        const boxes = document.querySelectorAll('.box-a');
        boxes.forEach(box => insertarEtiquetas(box));
    }

    function loadProducts() {
        const { category } = getUrlParams();
    
        if (!category) {
            console.error('Categoría no especificada en la URL.');
            return;
        }
    
        const jsonBasePath = '../json/playeras/volumenes/';
        const jsonFile = `${jsonBasePath}${category}.json`;
    
        // Mostrar mensaje de carga 
        noResultsMessage.textContent = "Estamos organizando y clasificando los diseños. Por favor, espere...";
        noResultsMessage.style.display = 'block';

        const categoryTitleMap = {
            'gym': {
                title: 'GYM',
                title_2: 'Gym',
                bannerImage: 'https://i.ibb.co/1Hc93Pg/gym.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'urbanos': {
                title: 'URBANOS',
                title_2: 'Urbanos',
                bannerImage: 'https://i.ibb.co/ZRBTptMB/urbanos.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'calacas': {
                title: 'CALACAS CHIDAS',
                title_2: 'Calacas',
                bannerImage: 'https://i.ibb.co/mrFFVzKR/calacas-chidas.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'streetwear': {
                title: 'STREETWEAR',
                title_2: 'Streetwear',
                bannerImage: 'https://i.ibb.co/nN6n5Lkx/streetwear.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'marcas': {
                title: 'MARCAS',
                title_2: 'Marcas',
                bannerImage: 'https://i.ibb.co/LD2dD6t0/marcas.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'san-valentin': {
                title: 'SAN VALENTIN',
                title_2: 'San Valentín',
                bannerImage: 'https://i.ibb.co/NnSZQdMw/san-valentin.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'vehiculos': {
                title: 'VEHICULOS',
                title_2: 'Vehiculos',
                bannerImage: 'https://i.ibb.co/Kxk32LqL/vehiculos.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'anime': {
                title: 'ANIME',
                title_2: 'Anime',
                bannerImage: 'https://i.ibb.co/YWw1Qt4/anime-logo.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'peliculas': {
                title: 'PELICULAS',
                title_2: 'Peliculas',
                bannerImage: 'https://i.ibb.co/fzw4481p/peliculas.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'cute': {
                title: 'CUTE',
                title_2: 'Cute',
                bannerImage: 'https://i.ibb.co/bjw6RhV4/cute.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'synthwave': {
                title: 'SYNTHWAVE',
                title_2: 'Synthwave',
                bannerImage: 'https://i.ibb.co/xK9dTVwY/synthwave.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'varios': {
                title: 'VARIOS',
                title_2: 'Varios',
                bannerImage: 'https://i.ibb.co/xK9dTVwY/synthwave.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'series': {
                title: 'SERIES',
                title_2: 'Series',
                bannerImage: 'https://i.ibb.co/nqYW8ymV/series.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'caricaturas': {
                title: 'CARICATURAS',
                title_2: 'Caricaturas',
                bannerImage: 'https://i.ibb.co/4ZbqTFdL/caricaturas.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'artistas': {
                title: 'ARTISTAS',
                title_2: 'Artistas',
                bannerImage: 'https://i.ibb.co/4ZbqTFdL/caricaturas.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            },
            'animales': {
                title: 'ANIMALES',
                title_2: 'Artistas',
                bannerImage: 'https://i.ibb.co/4ZbqTFdL/caricaturas.png',
                bannerSection: 'https://i.ibb.co/7K822Bd/banner-merch-d.png'
            }
        };

        const categoryData = categoryTitleMap[category];
        if (categoryData) {
            document.getElementById('pageTitle').textContent = 'Merch Zone | ' + categoryData.title_2;
            document.getElementById('categoryTitle').textContent = categoryData.title;
            document.getElementById('bannerImage').src = categoryData.bannerImage;

            if (bannerSection) {
                bannerSection.style.backgroundImage = `url(${categoryData.bannerSection})`;
            } else {
                console.warn("No se encontró el elemento con ID 'bannerSection'. Asegúrate de que exista en tu HTML.");
            }
        }

        fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                if (!data || data.length === 0) {
                    console.warn(`No hay productos disponibles para la categoría ${category}.`);
                    return;
                }
                productContainer.innerHTML = '';
                allItems = data.map(item => {
                    const div = document.createElement('div');
                    div.classList.add('box-a');
                    div.setAttribute('data-name', item.name);
                    div.setAttribute('data-hot', item.hot);
                    div.setAttribute('data-new', item.new);
                    div.setAttribute('data-bestseller', item.bestseller);
                    div.setAttribute('data-date', item.date);
                    div.setAttribute('data-image', item.image);
                    div.setAttribute('data-link', item.link);
                    div.setAttribute('data-designs', item.designs);
                    div.style.display = 'none';

                    const imgContainer = document.createElement('div');
                    imgContainer.classList.add('img-container-b');

                    const loader = document.createElement('div');
                    loader.classList.add('loader');

                    const img = document.createElement('img');
                    img.classList.add('hover-img');
                    img.src = item.image;
                    img.alt = item.name;
                    img.style.opacity = 0;

                    imgContainer.appendChild(loader);
                    imgContainer.appendChild(img);

                    const p = document.createElement('p');
                    p.classList.add('overlay-text');
                    p.textContent = item.name;

                    div.appendChild(imgContainer);
                    div.appendChild(p);

                    img.addEventListener('load', () => {
                        img.style.opacity = 1;
                        loader.style.display = 'none';
                    });

                    img.addEventListener('error', () => {
                        console.error(`Error al cargar la imagen: ${item.image}`);
                        loader.style.display = 'none';
                    });

                    addButtonsAndText(div);
                    return div;
                });

                filteredItems = [...allItems]; // Inicializa filteredItems con todos los elementos
                añadirEtiquetasAFiltros();
                updatePagination();
            })
            
    }

    function displayItems(page) {
        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;
        productContainer.innerHTML = '';

        for (let i = 0; i < filteredItems.length; i++) {
            if (i >= start && i < end) {
                productContainer.appendChild(filteredItems[i]);
                filteredItems[i].classList.remove('show');
                filteredItems[i].style.display = 'block';
                filteredItems[i].classList.add('show');

                insertarEtiquetas(filteredItems[i]); // Añade las etiquetas al mostrar los items
            } else {
                filteredItems[i].classList.remove('show');
                filteredItems[i].style.display = 'none';
            }
        }
        updateNoResultsMessage();
        updatePaginationUI();
    }

    function updateNoResultsMessage() {
        const searchValue = document.getElementById("search-bar")?.value.trim() || "";
        if (filteredItems.length === 0 && searchValue !== "") {
            noResultsMessage.textContent = `Parece que "${searchValue}" aún no ha llegado a nuestra colección. ¡Estaremos creando algo genial pronto!`;
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }

    function updatePaginationUI() {
        totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        paginationContainers.forEach(pagination => {
            const pageNumbersContainer = pagination.querySelector('.page-numbers');
            const prevButton = pagination.querySelector('.prev');
            const nextButton = pagination.querySelector('.next');

            pageNumbersContainer.innerHTML = '';

            const maxVisiblePages = window.innerWidth < 768 ? 3 : 12;
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }

            if (startPage > 1) {
                createPageButton(pageNumbersContainer, 1);
                if (startPage > 2) createDots(pageNumbersContainer);
            }

            for (let i = startPage; i <= endPage; i++) {
                createPageButton(pageNumbersContainer, i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) createDots(pageNumbersContainer);
                createPageButton(pageNumbersContainer, totalPages);
            }

            prevButton.disabled = currentPage === 1;
            nextButton.disabled = currentPage === totalPages;
        });
    }

    function createPageButton(container, pageNumber) {
        const pageButton = document.createElement('button');
        pageButton.textContent = pageNumber;
        pageButton.classList.add('page-number');
        if (pageNumber === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', function () {
            if (pageNumber !== currentPage) {
                currentPage = pageNumber;
                displayItems(currentPage);
                scrollToCatalog();
            }
        });
        container.appendChild(pageButton);
    }

    function createDots(container) {
        const dots = document.createElement('span');
        dots.textContent = '...';
        dots.classList.add('dots');
        container.appendChild(dots);
    }

    function scrollToCatalog() {
        if (catalogSection) {
            catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function updatePagination() {
        totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        currentPage = 1;
        displayItems(currentPage);
    }

    function applyFilter(filterFunc) {
        filteredItems = allItems.filter(filterFunc);
        updatePagination();
    }

    function performSearch(searchValue) {
        // Si el campo de búsqueda está vacío, restaurar filteredItems al estado anterior (filtros aplicados o todos los elementos)
        if (!searchValue) {
            filteredItems = [...allItems]; // O filteredItems = allItems.filter(algunaFuncionDeFiltro); si se aplican filtros
            updatePagination(); // Recarga la paginación con todos los elementos (o los elementos filtrados si hay filtros)
            return; // Salir de la función para no aplicar el filtro de búsqueda
        }

        filteredItems = allItems.filter(item =>
            item.getAttribute("data-name")?.toLowerCase().includes(searchValue.toLowerCase()) || false
        );
        updatePagination();
    }

    // Mostrar la ventana emergente al hacer clic en "Filtrar"
    filterBtn?.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    // Cerrar la ventana emergente
    closePopup?.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Función para verificar si se está filtrando
    function isFiltered() {
        return filteredItems.length !== allItems.length; // Retorna true si hay elementos filtrados
    }

    // Función para mostrar u ocultar el botón de "Limpiar Filtro"
    function toggleResetButton() {
        if (isFiltered()) {
            resetBtn.style.display = "block";
        } else {
            resetBtn.style.display = "none";
        }
    }


    // Función para ordenar los elementos (Manteniendo los "NEW" al principio)
    function sortBoxes(criteria) {
        let sortedItems = [...filteredItems]; // Usa filteredItems para el ordenamiento
        const container = document.querySelector(".container-a"); // Asegúrate de que este selector es correcto

        // Primero, asegurar los elementos "NEW"
        sortedItems.sort((a, b) => {
            const isNewA = a.getAttribute("data-new") === "true";
            const isNewB = b.getAttribute("data-new") === "true";

            if (isNewA && !isNewB) return -1;
            if (!isNewA && isNewB) return 1;
            return 0;
        });

        // Ordenar por otros criterios
        if (criteria === "az") {
            sortedItems.sort((a, b) => {
                let nameA = a.getAttribute("data-name").toLowerCase();
                let nameB = b.getAttribute("data-name").toLowerCase();
                return nameA.localeCompare(nameB);
            });
        } else if (criteria === "za") {
            sortedItems.sort((a, b) => {
                let nameA = a.getAttribute("data-name").toLowerCase();
                let nameB = b.getAttribute("data-name").toLowerCase();
                return nameB.localeCompare(nameA);
            });
        } else if (criteria === "newest") {
            sortedItems.sort((a, b) => {
                let dateA = new Date(a.getAttribute("data-date"));
                let dateB = new Date(b.getAttribute("data-date"));
                return dateB - dateA;
            });
        }

        // Vaciar el contenedor antes de añadir los elementos ordenados
        if (container) { // Verifica que el contenedor exista
            container.innerHTML = '';
            // Reorganizar los elementos en el contenedor
            sortedItems.forEach(box => {
                container.appendChild(box);
            });
        } else {
            console.error("El contenedor '.container-a' no fue encontrado.");
        }

        // Después de ordenar, actualiza la paginación y asegura que se muestren las etiquetas
        filteredItems = sortedItems; // Actualiza filteredItems con el ordenamiento
        updatePagination();
    }



    // Opciones de filtrado
    document.getElementById("hot")?.addEventListener("click", function () {
        applyFilter(item => item.getAttribute("data-hot") === "true");
        toggleResetButton();
        popup.style.display = "none";
    });

    document.getElementById("new")?.addEventListener("click", function () {
        applyFilter(item => item.getAttribute("data-new") === "true");
        toggleResetButton();
        popup.style.display = "none";
    });

    // Función para limpiar filtros
    resetBtn?.addEventListener("click", function () {
        filteredItems = [...allItems]; // Restaura todos los elementos
        updatePagination(); // Actualiza la paginación para mostrar todos los elementos
        toggleResetButton();
        popup.style.display = "none";
    });

    // Ordenar los elementos
    document.getElementById("newest")?.addEventListener("click", function () {
        sortBoxes("newest");
        toggleResetButton();
        popup.style.display = "none";
    });

    document.getElementById("az")?.addEventListener("click", function () {
        sortBoxes("az");
        toggleResetButton();
        popup.style.display = "none";
    });

    document.getElementById("za")?.addEventListener("click", function () {
        sortBoxes("za");
        toggleResetButton();
        popup.style.display = "none";
    });


    // Al cargar la página, ordenar los elementos para que los nuevos estén al principio y mostrar los items
    loadProducts();
    //sortBoxes(); //Ya se llama a sortBoxes dentro de loadProducts
    //showItems(currentPage); // Ya se llama a displayItems dentro de updatePagination que es llamado por loadProducts

    function addButtonsAndText(box) {
        const expandButton = document.createElement('button');
        expandButton.classList.add('btn-expand-b');
        expandButton.innerHTML = '<i class="fa-solid fa-expand"></i>';
        expandButton.setAttribute("data-text", "FULLSCREEN");
        expandButton.onclick = function () {
            openModal(box);
        };

        const linkButton = document.createElement('button');
        linkButton.classList.add('btn-link-b');
        linkButton.innerHTML = '<i class="fa-solid fa-book-open"></i>';
        linkButton.setAttribute("data-text", "CATÁLOGO");
        linkButton.onclick = function () {
            openLink(box);
        };

        const textIconButton = document.createElement('button');
        textIconButton.classList.add('btn-text-icon');
        textIconButton.innerHTML = '<i class="fa-solid fa-layer-group"></i>';

        const designsCount = box.getAttribute('data-designs');
        const displayText = designsCount === '1' ? "ÚNICO" : `${designsCount} DISEÑOS`;
        textIconButton.setAttribute("data-text", displayText);

        box.appendChild(expandButton);
        box.appendChild(linkButton);
        box.appendChild(textIconButton);
    }

    function openModal(box) {
        const imageSrc = box.getAttribute('data-image');
        document.getElementById('modalImage-b').src = imageSrc;
        document.getElementById('imageModal-b').style.display = "block";
    }

    function closeModal() {
        document.getElementById('imageModal-b').style.display = "none";
    }

    function openLink(box) {
        const linkUrl = box.getAttribute('data-link');
        window.location.href = linkUrl;
    }

    // --- NUEVO CÓDIGO PARA EL BUSCADOR ---
    searchBar.addEventListener("input", function () {
        const searchValue = searchBar.value.toLowerCase().trim();
        performSearch(searchValue);
    });
    // --- FIN DEL NUEVO CÓDIGO DEL BUSCADOR ---
});