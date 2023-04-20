const React = require('react');

module.exports = function Navbar({ userSession }) {
  return (
    <nav className="navbarContainer">
      <link rel="stylesheet" href="/css/nav.style.css" />
      <ul className="navbarList">
        <li className='navbar-li'>
          <a href="/game" className="cardsBtn">
            Cards
          </a>
        </li>
        <li className='navbar-li'>
          <a href="#info" className="infoBtn">
            Info
          </a>
        </li>
        <li className='navbar-li'>
          <a href="/profile" className="greeting">
            Hello,
            {' '}
            {userSession?.user}
            !
          </a>
        </li>
      </ul>
      <div className='navbar-li'>
          <a className="logoutBtn" href="/login/logout">
            Logout
          </a>
        </div>
    </nav>
  );
};
