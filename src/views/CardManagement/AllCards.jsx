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
      <script src="js/CardManagement/deckSelect.js" />
    </Layout>
  );
};
