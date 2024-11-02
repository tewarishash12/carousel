let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const imageCounter = document.getElementById('imageCounter');
const imageIndicatorsContainer = document.getElementById('imageIndicators');

function createIndicators() {
    imageIndicatorsContainer.innerHTML = '';

    slides.forEach((slide, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
        imageIndicatorsContainer.appendChild(indicator);
    });
}

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });

    createIndicators();
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === currentIndex) {
            indicator.classList.add('active');
        }
    });

    imageCounter.textContent = (currentIndex + 1) + ' / ' + slides.length;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

createIndicators();
showSlide(currentIndex);
