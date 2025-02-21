document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.hover-img');

    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded'); // Add the 'loaded' class to trigger the fade-in
            img.parentElement.querySelector('.loader').style.display = 'none'; // Hide the loader
        });
        // Optional: Handle image loading errors
        img.addEventListener('error', () => {
            console.error('Error loading image:', img.src);
            img.parentElement.querySelector('.loader').style.display = 'none'; // Hide the loader in case of error
            // Optionally display a placeholder or error message
        });
    });
});