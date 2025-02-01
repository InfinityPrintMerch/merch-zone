document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("comparison");
    const overlay = document.getElementById("overlay");
    const slider = document.getElementById("slider");

    let isDragging = false;

    function moveSlider(e) {
        if (!isDragging) return;
        let rect = container.getBoundingClientRect();
        let x = e.clientX || e.touches[0].clientX;
        let position = ((x - rect.left) / rect.width) * 100;
        position = Math.max(0, Math.min(100, position));
        // Actualizamos el clip-path para cortar la imagen en función de la posición del slider
        overlay.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
        slider.style.left = position + "%";
    }

    slider.addEventListener("mousedown", () => isDragging = true);
    slider.addEventListener("touchstart", () => isDragging = true);

    document.addEventListener("mousemove", moveSlider);
    document.addEventListener("touchmove", moveSlider);

    document.addEventListener("mouseup", () => isDragging = false);
    document.addEventListener("touchend", () => isDragging = false);
});
