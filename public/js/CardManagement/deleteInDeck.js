console.log('deleteInDeck.js');
const mainDeckDiv = document.querySelector('.mainDeckDiv');

mainDeckDiv.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteCard')) {
    event.preventDefault();
    const { deleteid } = event.target.dataset;
    try {
      const response1 = await fetch(`/delete/newcard/${deleteid}`, {
        method: 'DELETE',
      });
      const result1 = await response1.json();
      if (result1.msg === 'Card deleted') {
        event.target.parentElement.remove();
      }
    } catch (error) {
      console.log(error);
    }
  }
});

document.querySelector('.delete-deck').addEventListener('click', async (e) => {
  const deckId = e.target.id;
  try {
    await fetch(`/delete/newdeck/${deckId}`, {
      method: 'Delete',
    });
    window.location = '/deck';
  } catch (error) {
    console.log(error);
  }
})