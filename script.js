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
  response.textContent = "yay! split the bill? JOKE";

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

/* Buttons style */
button {
  background: #fff;              /* white button */
  color: #162447;                /* dark text */
  border: 2px solid #d4af37;    /* gold border */
  padding: 10px 25px;
  border-radius: 30px;           /* rounded edges */
  cursor: pointer;
  margin: 10px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;            /* needed for moving No button */
}

button:hover {
  background: #d4af37;           /* gold hover */
  color: white;                  /* text turns white on hover */
  transform: scale(1.05);        /* small grow effect */
}
