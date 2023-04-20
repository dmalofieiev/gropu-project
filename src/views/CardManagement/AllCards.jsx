const React = require('react');
const Layout = require('../Layout');

module.exports = function AllCards({ userSession, clearDeckTitles }) {
  return (
    <Layout userSession={userSession}>
      <div className='container-new-post'>
        <div className="addDeckDiv">
          <form name="addDeck" className='addDeck'>
            <select name="title" className='select-add-deck'>
              {clearDeckTitles.map((el) => (
                <option key={el.id} value={el.title}>
                  {el.title}
                </option>
              ))}
            </select>
            <button className='button-add-deck'>Select this deck</button>
          </form>
        </div>
        <div className="createNewDeck">
          <form name="createDeck" className='addDeck'>
            <input
              className='input-create-deck'
              type="text"
              name="title"
              placeholder="Enter deck title"
              required
            />
            <button  className='button-add-deck'>Create new deck</button>
          </form>
          <span className="msg"> </span>
        </div>
      </div>
      <script src="js/CardManagement/deckSelect.js" />
      <script src="js/CardManagement/newDeck.js" />
    </Layout>
  );
};
