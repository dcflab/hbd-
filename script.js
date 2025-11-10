const card = document.getElementById('card');
const yesBtn = document.getElementById('ofc my love');
const noBtn = document.getElementById('no');
const response = document.getElementById('response');

// Flip the card when clicked
card.addEventListener('click', () => {
  card.classList.toggle('open');
});

// Yes/No button messages
yesBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  response.textContent = "Yehey!! split the bill? JOKE";
});

noBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  response.textContent = "sige sino pala gusto mo kasama";
});
