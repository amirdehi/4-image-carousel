const carousel = document.getElementById('carousel');
const images = Array.from(carousel.querySelectorAll('img'));
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
    updateSideImagesBackground();
}

function updateSideImagesBackground() {
    let nextIndex = (currentIndex + 1) % images.length;
    let prevIndex = (currentIndex - 1 + images.length) % images.length;
    nextBtn.style.backgroundImage = `url(${images[nextIndex].src})`;
    prevBtn.style.backgroundImage = `url(${images[prevIndex].src})`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(currentIndex);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
window.onload = updateCarousel(0);

images.forEach((img, i) => {
    img.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
    });
});