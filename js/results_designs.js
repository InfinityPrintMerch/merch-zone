document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const boxes = document.querySelectorAll(".box-t");

    searchBar.addEventListener("input", function () {
        let searchValue = searchBar.value.toLowerCase().trim();

        boxes.forEach(box => {
            let name = box.getAttribute("data-name").toLowerCase();

            if (name.includes(searchValue)) {
                box.style.display = "block"; // Muestra el cuadro

                // Reinicia la animación
                box.classList.remove("fade-in");
                void box.offsetWidth; // Forzar reflow para reiniciar la animación
                box.classList.add("fade-in");
            } else {
                box.style.display = "none"; // Oculta el cuadro
            }
        });
    });
});
