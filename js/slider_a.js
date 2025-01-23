const images = [
  "https://i.ibb.co/pZRML9j/banner-merch-c.png",
  "https://i.ibb.co/mSn633J/banner-merch-b.png",
  "ttps://i.ibb.co/pZRML9j/banner-merch-c.png",
  "https://i.ibb.co/mSn633J/banner-merch-b.png"
];

let index = 0;
const bannerSection = document.getElementById("bannerMerch");

function changeBackground() {
  index = (index + 1) % images.length;
  bannerSection.style.opacity = 0; // Inicia fade-out
  setTimeout(() => {
    bannerSection.style.backgroundImage = `url('${images[index]}')`; // Cambia el fondo
    bannerSection.style.opacity = 1; // Inicia fade-in
  }, 500); // Espera 500ms antes de cambiar la imagen
}

setInterval(changeBackground, 100); // Cambia cada 10 segundos
