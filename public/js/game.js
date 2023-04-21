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
    containerCard.innerHTML = '';
    const { deckId } = e.target.dataset;
    try {
      const response = await fetch(`/game/card/${deckId}`);
      const result = await response.json();
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
        const pInfo = document.createElement('img');
        pInfo.className = 'word-info';
        pInfo.id = `${el.en}`;
        pInfo.style.position = 'absolute';
        pInfo.style.top = '10px';
        pInfo.style.right = '10px';
        pInfo.src = '/assets/info.svg';
        if (status) {
          pStatys.className = 'word-stat  word-status-true';
          pStatys1.className = 'word-stat word-status word-status-true';
          pStatys1.src = '/assets/123.svg';
          pStatys.src = '/assets/123.svg';
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
        enDiv.append(pInfo);
        enDiv.append(pStatys);
        ruDiv.append(pStatys1);
        divPerspective.append(enDiv);
        divPerspective.append(ruDiv);
        divContainer.append(divPerspective);
        arrCard.push(divContainer);
      });
      containerCard.append(...arrCard);
      perspective.classList.add('rotate');
      containerDeck.style.pointerEvents = 'none';
      containerCard.style.zIndex = 1;
      setTimeout(() => {
        const button = document.createElement('button');
        button.className = 'button-game-finish';
        button.innerText = 'BACK TO THE CATEGORIES';
        button.onclick = () => {
          perspective.classList.remove('rotate');
          button.remove();
          containerDeck.style.pointerEvents = 'auto';
        };
        perspective.append(button);
      }, 600);
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
      event.target.src = '/assets/123.svg';
      const { deckId } = event.target.dataset;
      const { cardId } = event.target.dataset;
      try {
        const response = await fetch('/game/status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ deckId, cardId }),
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
});
containerCard.addEventListener('mouseover', async (event) => {
  if (event.target.classList.contains('word-info')) {
    const word = event.target.id;
    const clientY = event.clientY;
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const result = await response.json();
      const divInfo = document.createElement('div');
      const arrInfo = new Array(3).fill('');
      const ResArr = [];
      arrInfo.forEach((el, index) => {
        const newEl = document.createElement('p');
        if (index === 0) {
          newEl.innerText = `Part of speech: ${result[0].meanings[0].partOfSpeech}` ;
          ResArr.push(newEl);
        }
        if (index === 1 && result[0].meanings[0].definitions[0].definition) {
          newEl.innerText =`Definition: ${result[0].meanings[0].definitions[0].definition}` ;
          ResArr.push(newEl);
        }
        if (index === 2 && result[0].meanings[0].definitions[0].example) {
          newEl.innerText =`Example: ${result[0].meanings[0].definitions[0].example}`;
          ResArr.push(newEl);
        }
      });
      divInfo.append(...ResArr);
      console.log(divInfo)
      divInfo.className = "div-info-block";
      divInfo.style.top = `${clientY - 150}px`;
      const windowInnerWidth = document.documentElement.clientWidth
      if (windowInnerWidth < 700) {
        divInfo.style.top = `${clientY - 200}px`;
      } 
      document.body.append(divInfo);
      event.target.addEventListener("mouseleave", () => {
        divInfo.remove();
      });
    } catch (error) {
      console.log(error);
    }
  }
});
