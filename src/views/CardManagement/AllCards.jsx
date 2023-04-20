const React = require('react');
const Layout = require('../Layout');

module.exports = function AllCards({ userSession, clearDeckTitles }) {
  return (
    <Layout userSession={userSession}>
      <div className="addDeckDiv">
        <form name="addDeck">
          <select name="title">
            {clearDeckTitles.map((el) => (
              <option key={el.id} value={el.title}>{el.title}</option>
            ))}
          </select>
          <button>Select this deck</button>
        </form>
      </div>
      <div className="createNewDeck">
        <form name="createDeck">
          <input type="text" name="title" placeholder="Enter deck title" required />
          <button>Create new deck</button>
        </form>
        <span className="msg"> </span>
      </div>
      <script src="js/CardManagement/deckSelect.js" />
      <script src="js/CardManagement/newDeck.js" />
    </Layout>
  );
};
