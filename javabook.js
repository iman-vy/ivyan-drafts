const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.book-card');
const title = document.getElementById('book-title');
const stars = document.getElementById('book-stars');
let currentIndex = 0;

function updateBookDetails(index) {
  const currentCard = cards[index];
  title.textContent = currentCard.dataset.title;
  stars.textContent = currentCard.dataset.stars;
}

function showCard(index) {
  const offset = -index * 200; // Adjust this if your book card width is different
  track.style.transform = `translateX(${offset}px)`;
  updateBookDetails(index);
}

document.querySelector('.left-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
});

document.querySelector('.right-btn').addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    showCard(currentIndex);
  }
});

// Initialize the first book detail on load
showCard(currentIndex);
