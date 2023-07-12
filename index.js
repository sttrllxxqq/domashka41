// 41
const images = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.slider-button:first-child');
const nextButton = document.querySelector('.slider-button:last-child');
let currentIndex = 0;

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showCurrentImage();
  }
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    showCurrentImage();
  }
}

function showCurrentImage() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.opacity = '1';
    } else {
      image.style.opacity = '0';
    }
  });

  if (currentIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (currentIndex === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

showCurrentImage();