const card = document.getElementById('card');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

// Open/close the card when clicked
card.addEventListener('click', () => {
  card.classList.toggle('open');
});

// Prevent closing when clicking buttons
yesBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  response.textContent = "Yay! See you there, my love 💖";
});

noBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  noBtn.textContent = "Are you sure?? 😢";
  noBtn.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 50 - 25}px)`;
});
