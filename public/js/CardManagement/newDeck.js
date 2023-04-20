console.log('newDeck.js');
const { createDeck } = document.forms;
createDeck.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(createDeck);
  const deckTitle = e.target.title.value;

  try {
    const response = await fetch(`/create/${deckTitle}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    if (result.msg === 'New Deck Created') {
      window.location.href = `/addNewCard/${deckTitle}`;
    } else {
      alert('Deck already exists');
    }
  } catch (error) {
    console.log(error);
  }
});
