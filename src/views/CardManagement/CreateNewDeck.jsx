const React = require('react');
const Layout = require('../Layout');

module.exports = function CreateNewDeck({ userSession, deckTitle, clearCards }) {
  return (
    <Layout userSession={userSession}>
      <h1>
        Your deck
        {' '}
        {}
        {deckTitle}
      </h1>
      <form name="addCard" data-decktitle={deckTitle}>
        <input type="text" name="en" placeholder="Enter a word in English" required />
        <input type="text" name="ru" placeholder="Enter a word in Russian" required />
        <button>Add card</button>
      </form>
      <div className="allNewCard">
        {clearCards?.map((el) => (
          <div className="wordCard">
            <div className="enWord">{el.en}</div>
            <div className="ruWord">{el.ru}</div>
            <a href={`/delete/newcard/${el.id}`} className="deleteBtn" data-deleteid={el.id}> X</a>
          </div>
        ))}
      </div>

      <script defer src="/js/CardManagement/addCard.js" />
    </Layout>

  );
};
