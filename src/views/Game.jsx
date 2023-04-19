const React = require('react');
const Layout = require('./Layout');

module.exports = function Game() {
  return (
    <Layout>
      <script defer src="/js/game.js" />
      <div className="container-game">
        <div className="perspective">
          <div className="container-deck" />
          <div className="container-card" />
        </div>
      </div>
    </Layout>
  );
};
