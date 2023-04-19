const React = require('react');

module.exports = function Navbar({ userName }) {
  return (
    <nav className="navbarContainer">
      <link rel="stylesheet" href="/css/nav.style.css" />
      <ul className="navbarList">
        <li>
          <a href="#cards" className="cardsBtn">
            Cards
          </a>
        </li>
        <li>
          <a href="#info" className="infoBtn">
            Info
          </a>
        </li>
        <li>
          <a href="#profile" className="greeting">
            Hello, {userName}!
          </a>
        </li>
        <li>
          <button type="button" className="logoutBtn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};