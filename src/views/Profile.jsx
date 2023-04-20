const React = require('react');
const Layout = require('./Layout');
const Stat = require('./Stat');

module.exports = function Profile({ userSession, userStat }) {
  return (
    <Layout userSession={userSession}>
      <div className="profile">
        <Stat userStat={userStat} />
        <div className="deck-stat-container">
          <a className="deck-button" href="/deck">
            {' '}
            Decks
          </a>
        </div>
      </div>
    </Layout>
  );
};
