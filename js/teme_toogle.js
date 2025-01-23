// Detectar el modo de color del navegador y cambiar el favicon
const darkModeIcon = 'https://i.ibb.co/L6DXRwV/icon-a.png';
const lightModeIcon = 'https://i.ibb.co/zR6M2p2/icon-c.png';
const favicon = document.getElementById('favicon');

function updateFavicon() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    favicon.href = isDarkMode ? darkModeIcon : lightModeIcon;
}

// Ejecutar la función de actualización de favicon al cargar la página
window.addEventListener('load', updateFavicon);

// Escuchar cambios en el modo de color
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
