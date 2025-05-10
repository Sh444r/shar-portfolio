// JavaScript for Carousel Navigation
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

// Get the total number of project cards (slides)
const totalProjects = document.querySelectorAll('.project-card').length;

// Function to update the carousel position
function updateCarousel() {
  const offset = -currentIndex * 100; // Move by 100% of the card width
  carousel.style.transform = `translateX(${offset}%)`;
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalProjects - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === totalProjects - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});
