console.log('deckSelect.js');
const { addDeck } = document.forms;

addDeck.addEventListener('submit', (e) => {
  e.preventDefault();
  const deckTitle = e.target.title.value;
  window.location = `/view/${deckTitle}`;
});
