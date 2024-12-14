
const carousel = document.getElementById('carousel');
const images = Array.from(carousel.querySelectorAll('img'));
const title = document.getElementById('imageTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Function to update carousel images
function updateCarousel(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add('main');
            img.classList.remove('side');
        } else {
            img.classList.remove('main');
            img.classList.add('side');
        }
    });
    title.textContent = images[index].dataset.title;
}

// Move to next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(currentIndex);
}

// Move to previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(currentIndex);
}

// Event Listeners
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Allow clicking images to navigate
images.forEach((img, i) => {
    img.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
    });
});