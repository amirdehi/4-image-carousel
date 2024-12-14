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
            updateSideImagesBackground(index);
        } else {
            img.classList.remove('main');
            img.classList.add('side');
        }
    });
}

function updateSideImagesBackground(index) {
    let nextIndex = (index + 1) % images.length;
    let prevIndex = (index - 1 + images.length) % images.length;
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

images.forEach((img, i) => {
    img.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
    });
});