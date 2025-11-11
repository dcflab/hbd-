/* Fonts */
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #1a1a2e, #162447);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

/* Headings */
h1, h2 {
  font-family: 'Dancing Script', cursive;
  color: #162447;
}

/* Card */
.card {
  width: 500px;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
}

/* Front & Inside */
.front, .inside {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 20px;
  background: #fff8e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  transition: transform 1s;
  pointer-events: none; /* allows card click even with buttons */
  border: 3px solid #d4af37;
}

/* Buttons clickable */
button {
  pointer-events: auto;
}

/* Front content */
.front h1 {
  font-size: 2.5rem;
  margin: 0;
}
.front .click-text {
  font-size: 1rem;
  margin-top: 1rem;
}

/* Inside content */
.inside {
  transform: rotateY(180deg);
}
.inside h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.inside p {
  font-size: 1.1rem;
  line-height: 1.5;
}

/* Flip animation */
.card.open .front {
  transform: rotateY(180deg);
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
