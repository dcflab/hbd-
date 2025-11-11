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
  response.textContent = "yay! split the bill? JOKE";/* Fonts */
body {
  font-family: 'Poppins', sans-serif;
}

/* Headings */
h1, h2 {
  font-family: 'Dancing Script', cursive;
}

/* Page & Card */
body {
  background: linear-gradient(135deg, #1a1a2e, #162447);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.card {
  width: 600px;
  height: 350px;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
}

/* Front & Inside */
.front, .inside {
  width: 50%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background: linear-gradient(135deg, #fdf6e3, #fff8e7);
  border: 3px solid #d4af37;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 1s;
  color: #162447;
  padding: 1rem;
  pointer-events: none; /* allow card click even with buttons */
}

/* Allow buttons to be clickable */
button {
  pointer-events: auto;
}

/* Front */
.front {
  left: 0;
}

.front h1 {
  font-size: 2.5rem;
  margin: 0;
}

.front .click-text {
  font-size: 1rem;
  margin-top: 1rem;
}

/* Inside */
.inside {
  right: 0;
  transform: rotateY(180deg);
}

.inside h2 {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
}

.inside p {
  font-size: 1.1rem;
  line-height: 1.5;
}

/* Flip Animation */
.card.open .front {
  transform: rotateY(-180deg);
}

.card.open .inside {
  transform: rotateY(0deg);
}

/* Buttons style */
button {
  background: #fff;
  color: #162447;
  border: 2px solid #d4af37;
  padding: 10px 25px;
  border-radius: 30px;
  cursor: pointer;
  margin: 10px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

button:hover {
  background: #d4af37;
  color: white;
  transform: scale(1.05);
}

/* Response message */
#response {
  margin-top: 15px;
  font-weight: bold;
  color: #d4af37;
  font-size: 1.2rem;
}


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
