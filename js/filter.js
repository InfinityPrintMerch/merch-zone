document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.getElementById("filter-btn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const resetBtn = document.getElementById("reset-btn"); // Botón de limpiar filtro
    const boxes = document.querySelectorAll(".box-a");

    // Mostrar la ventana emergente al hacer clic en "Filtrar"
    filterBtn.addEventListener("click", function () {
        popup.style.display = "flex"; // Muestra la ventana emergente
    });

    // Cerrar la ventana emergente
    closePopup.addEventListener("click", function () {
        popup.style.display = "none"; // Oculta la ventana emergente
    });

    // Función para ordenar los elementos
    function sortBoxes(criteria) {
        const container = document.querySelector(".container-a");
        let sortedBoxes = Array.from(boxes);

        // Asegura que los elementos nuevos siempre estén primero
        sortedBoxes.sort((a, b) => {
            const isNewA = a.getAttribute("data-new") === "true";
            const isNewB = b.getAttribute("data-new") === "true";

            if (isNewA && !isNewB) return -1; // A va antes de B si es nuevo
            if (!isNewA && isNewB) return 1;  // B va antes de A si es nuevo
            return 0; // Si ambos o ninguno son nuevos, no cambian
        });

        // Ordenar por otros criterios
        if (criteria === "az") {
            sortedBoxes.sort((a, b) => {
                let nameA = a.getAttribute("data-name").toLowerCase();
                let nameB = b.getAttribute("data-name").toLowerCase();
                return nameA.localeCompare(nameB);
            });
        } else if (criteria === "za") {
            sortedBoxes.sort((a, b) => {
                let nameA = a.getAttribute("data-name").toLowerCase();
                let nameB = b.getAttribute("data-name").toLowerCase();
                return nameB.localeCompare(nameA);
            });
        } else if (criteria === "newest") {
            sortedBoxes.sort((a, b) => {
                let dateA = new Date(a.getAttribute("data-date"));
                let dateB = new Date(b.getAttribute("data-date"));
                return dateB - dateA; // Los más nuevos primero
            });
        }

        // Reorganizar los elementos en el contenedor
        sortedBoxes.forEach(box => {
            container.appendChild(box);
        });
    }

    // Función para verificar si se está filtrando
    function isFiltered() {
        const filteredBoxes = Array.from(boxes).filter(box => box.style.display === "none");
        return filteredBoxes.length > 0; // Retorna true si hay elementos filtrados
    }

    // Función para mostrar u ocultar el botón de "Limpiar Filtro"
    function toggleResetButton() {
        if (isFiltered()) {
            resetBtn.style.display = "block"; // Muestra el botón si hay filtros
        } else {
            resetBtn.style.display = "none"; // Oculta el botón si no hay filtros
        }
    }

    // Opciones de filtrado
    document.getElementById("hot").addEventListener("click", function () {
        // Filtrar y mostrar solo los elementos con data-hot="true"
        boxes.forEach(box => {
            const isHot = box.getAttribute("data-hot") === "true";
            if (isHot) {
                box.style.display = "block"; // Muestra los elementos HOT
            } else {
                box.style.display = "none"; // Oculta los elementos que no son HOT
            }
        });

        toggleResetButton(); // Verifica si hay filtros y muestra el botón
        popup.style.display = "none";
    });

    // Opciones de filtrado para "NEW"
    document.getElementById("new").addEventListener("click", function () {
        // Filtrar y mostrar solo los elementos con data-new="true"
        boxes.forEach(box => {
            const isNew = box.getAttribute("data-new") === "true";
            if (isNew) {
                box.style.display = "block"; // Muestra los elementos NEW
            } else {
                box.style.display = "none"; // Oculta los elementos que no son NEW
            }
        });

        toggleResetButton(); // Verifica si hay filtros y muestra el botón
        popup.style.display = "none";
    });

    // Función para limpiar filtros
    resetBtn.addEventListener("click", function () {
        // Mostrar todos los elementos (limpiar filtros)
        boxes.forEach(box => {
            box.style.display = "block"; // Muestra todos los elementos
        });

        toggleResetButton(); // Verifica si hay filtros y muestra el botón
        popup.style.display = "none";
    });

    // Ordenar los elementos
    document.getElementById("newest").addEventListener("click", function () {
        sortBoxes("newest");
        toggleResetButton(); // Verifica si hay filtros y muestra el botón
        popup.style.display = "none";
    });

    document.getElementById("az").addEventListener("click", function () {
        sortBoxes("az");
        toggleResetButton(); // Verifica si hay filtros y muestra el botón
        popup.style.display = "none";
    });

    document.getElementById("za").addEventListener("click", function () {
        sortBoxes("za");
        toggleResetButton(); // Verifica si hay filtros y muestra el botón
        popup.style.display = "none";
    });

    // Al cargar la página, ordenar los elementos para que los nuevos estén al principio
    sortBoxes();
});
