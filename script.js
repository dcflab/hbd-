const card = document.getElementById('card');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const response = document.getElementById('response');

// Flip the card when clicked
card.addEventListener('click', () => {
  card.classList.toggle('open');
});

// Yes button stays normal
yesBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  response.textContent = "Yehey! split the bill? JOKE";
});

// No button moves randomly
noBtn.addEventListener('mouseover', () => {
  // Get random positions within the card
  const cardWidth = card.offsetWidth - noBtn.offsetWidth;
  const cardHeight = card.offsetHeight - noBtn.offsetHeight;
  const randomX = Math.floor(Math.random() * cardWidth);
  const randomY = Math.floor(Math.random() * cardHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Optional: change text after first click
noBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  noBtn.textContent = "Sige, sino pala gusto mo kasama? 🤔";
});
