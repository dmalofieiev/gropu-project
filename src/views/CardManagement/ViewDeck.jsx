const React = require('react');
const Layout = require('../Layout');

module.exports = function ViewDeck({ userSession, clearCards, userDeckId }) {
  return (
    <Layout userSession={userSession}>
      <div className="mainDeckDiv">
        {clearCards.map((el) => (
          <div className="cardDiv" key={el.id}>
            <div className="engWord" id={el.id}>
              {el.en}
            </div>
            <div className="rusWord" id={el.id}>
              {el.ru}
            </div>
            {userSession?.userId === userDeckId ? (
              <a href={`/delete/${el.id}`} className="deleteCard">
                Delete
              </a>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};
