document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box-a");

    boxes.forEach(box => {
        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('tags-container');
        box.prepend(tagsContainer); // Inserta las etiquetas al principio de cada box

        // Si tiene el atributo data-hot, añade la etiqueta HOT
        if (box.getAttribute("data-hot") === "true") {
            const hotTag = document.createElement('span');
            hotTag.classList.add('hot-tag', 'hot');
            hotTag.innerHTML = '<i class="fa-solid fa-fire"></i><span>HOT</span>';
            tagsContainer.appendChild(hotTag);
        }

        // Si tiene el atributo data-new, añade la etiqueta NEW
        if (box.getAttribute("data-new") === "true") {
            const newTag = document.createElement('span');
            newTag.classList.add('hot-tag', 'new');
            newTag.innerHTML = '<i class="fa-solid fa-star"></i><span>NEW</span>';
            tagsContainer.appendChild(newTag);
        }

        // Si tiene el atributo data-bestseller, añade la etiqueta BESTSELLER
        if (box.getAttribute("data-bestseller") === "true") {
            const bestsellerTag = document.createElement('span');
            bestsellerTag.classList.add('hot-tag', 'bestseller');
            bestsellerTag.innerHTML = '<i class="fa-solid fa-thumbs-up"></i><span>BESTSELLER</span>';
            tagsContainer.appendChild(bestsellerTag);
        }
    });
});
