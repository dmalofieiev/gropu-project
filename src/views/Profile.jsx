const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <h1> Decks</h1>
      <a href="/deck"> Decks</a>
    </Layout>

  );
};
