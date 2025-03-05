document.addEventListener("DOMContentLoaded", function() {
    let containers = document.querySelectorAll(".container_merch_item");

    containers.forEach(container => {
        let img = container.querySelector(".merch_item_a");
        let loader = container.querySelector(".loader");

        img.onload = function() {
            loader.style.display = "none";
            img.style.display = "block";
            setTimeout(() => {
                img.style.opacity = "1";
            }, 100);
        };
        img.src = img.src;
    });
});