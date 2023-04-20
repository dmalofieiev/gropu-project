console.log('addCard.js');
const { addCard } = document.forms;
const allNewCard = document.querySelector('.allNewCard');
addCard.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(addCard);
  const { decktitle } = e.target.dataset;
  try {
    const response = await fetch(`/addNewCard/${decktitle}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();
    if (result.msg === 'New Card Added') {
      const newWord = `
      <div class="cardDiv">
        <div class="engWord">
        ${result.clearCard.en}</div>
        <div class="rusWord">
        ${result.clearCard.ru}</div>
        <a href="/delete/${result.clearCard.id}" class="deleteBtn deleteCard" data-deleteid=${result.clearCard.id}>❌</a>
      </div>
      `;
      allNewCard.insertAdjacentHTML('afterbegin', newWord);
      document.querySelectorAll('input').forEach((el) => (el.value = ''));
    }
  } catch (error) {
    console.log(error);
  }
});

allNewCard.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteBtn')) {
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
