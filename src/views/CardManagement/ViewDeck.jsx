const React = require('react');
const Layout = require('../Layout');

module.exports = function ViewDeck({
  userSession,
  clearCards,
  userDeckId,
  deckTitle,
  deckId,
}) {
  console.log('clearCards: -------->', clearCards);
  return (
    <Layout userSession={userSession}>
      <div className="mainDeckDiv">
        <a href="/deck" className="backToDeck">
          Back to choose deck
        </a>
        <p className="deckTitle-ept">{deckTitle}</p>
        {userSession?.userId === userDeckId ? (
          <button className="delete-deck" id={deckId}>
            DELETE DECK
          </button>
        ) : null}
        <div className="container-choose">
          {clearCards?.map((el) => (
            <div className="cardDiv" key={el.id}>
              <div className="engWord" id={el.id}>
                {el.en}
              </div>
              <div className="rusWord" id={el.id}>
                {el.ru}
              </div>
              {userSession?.userId === userDeckId ? (
                <a
                  href={`/delete/newcard/${el.id}`}
                  className="deleteCard"
                  data-deleteid={el.id}
                >
                  ❌
                </a>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
      <script src="/js/CardManagement/deleteInDeck.js" />
    </Layout>
  );
};
