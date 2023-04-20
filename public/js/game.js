const containerDeck = document.querySelector('.container-deck');
const containerCard = document.querySelector('.container-card');
const perspective = document.querySelector('.perspective');
const addDeck = async () => {
  try {
    const response = await fetch('/game/deck');
    const result = await response.json();
    const arrayCategory = [];
    result.forEach((el) => {
      const newDiv = document.createElement('p');
      newDiv.className = 'deck-theme';
      newDiv.innerText = el.title;
      newDiv.dataset.deckId = el.id;
      arrayCategory.push(newDiv);
    });

    containerDeck.append(...arrayCategory);
  } catch (err) {
    console.log(err);
  }
};

addDeck();

containerDeck.addEventListener('click', async (e) => {
  if (e.target.classList.contains('deck-theme')) {
    const { deckId } = e.target.dataset;
    try {
      const response = await fetch(`/game/card/${deckId}`);
      const result = await response.json();
      console.log(result);
      const arrCard = [];
      result.deckCard.forEach((el) => {
        const divContainer = document.createElement('div');
        divContainer.className = 'word-container';
        const divPerspective = document.createElement('div');
        divPerspective.className = 'word-perspective';
        const status = result.deckStat.find((elem) => elem.cardId === el.id);
        const pStatys = document.createElement('img');
        const pStatys1 = document.createElement('img');
        pStatys1.src = '/assets/question.svg';
        pStatys.src = '/assets/question.svg';
        pStatys.className = 'word-stat';
        pStatys1.className = 'word-stat word-status';
        if (status) {
          pStatys.className = 'word-stat  word-status-true';
          pStatys1.className = 'word-stat word-status word-status-true';
          pStatys1.src = '/assets/check-mark.svg';
          pStatys.src = '/assets/check-mark.svg';
        }
        const enDiv = document.createElement('p');
        enDiv.className = 'card-theme-en';
        enDiv.innerText = el.en;
        enDiv.dataset.deckId = el.id;
        const ruDiv = document.createElement('p');
        ruDiv.className = 'card-theme-ru';
        pStatys1.dataset.deckId = deckId;
        pStatys1.dataset.cardId = el.id;
        pStatys1.style.cursor = 'pointer';
        ruDiv.innerText = el.ru;
        ruDiv.dataset.deckId = el.id;
        enDiv.append(pStatys);
        ruDiv.append(pStatys1);
        divPerspective.append(enDiv);
        divPerspective.append(ruDiv);
        divContainer.append(divPerspective);
        arrCard.push(divContainer);
      });
      containerCard.append(...arrCard);
      perspective.style.transform = 'rotateY(180deg)';
      containerCard.style.zIndex = 1;
    } catch (err) {
      console.log(err);
    }
  }
});
containerCard.addEventListener('click', async (event) => {
  if (event.target.classList.contains('card-theme-en')) {
    event.target.parentNode.style.transform = 'rotateY(180deg)';
  }
  if (event.target.classList.contains('word-status')) {
    if (!event.target.classList.contains('word-status-true')) {
      event.target.classList.add('word-status-true');
      event.target.src = '/assets/check-mark.svg';
      const { deckId } = event.target.dataset;
      const { cardId } = event.target.dataset;
      console.log(cardId, deckId);
      try {
        const response = await fetch('/game/status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ deckId, cardId }),
        });
        console.log(response)
      } catch (e) {
        console.log(e);
      }
    }
  }
});
