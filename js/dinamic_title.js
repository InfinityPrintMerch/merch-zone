document.addEventListener("DOMContentLoaded", function () {
    // Obtener parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const volParam = urlParams.get("vol"); // Ahora toma "streetwear_vol_1"

    console.log("Volumen detectado:", volParam); // Depuración

    if (volParam) {
        // Extraer solo el nombre del volumen y formatearlo
        const formattedTitle = volParam.replace(/_/g, " ").toUpperCase();

        console.log("Título generado:", formattedTitle); // Depuración

        // Actualizar el título en el DOM
        const titleElement = document.querySelector(".productos-personalizables-b h2");
        if (titleElement) {
            titleElement.textContent = formattedTitle;
        } else {
            console.error("Error JS.");
        }
    } else {
        console.error("No se encontró el parámetro 'vol' en la URL.");
    }
});
