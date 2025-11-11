const card = document.getElementById('card');
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const response = document.getElementById('response');

// Flip the card when clicked
card.addEventListener('click', () => {
  card.classList.toggle('open');
});

// Yes button
yesBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  response.textContent = "yay hehehe split the bill? JOKE";

  // Confetti effect
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
});

// No button moves when hovered
noBtn.addEventListener('mouseover', () => {
  const cardWidth = card.offsetWidth - noBtn.offsetWidth;
  const cardHeight = card.offsetHeight - noBtn.offsetHeight;
  const randomX = Math.floor(Math.random() * cardWidth);
  const randomY = Math.floor(Math.random() * cardHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// No button click changes text AND shows response
noBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  noBtn.textContent = "sige sino pala gusto mo kasama!!!";
  response.textContent = ">:(";
});
