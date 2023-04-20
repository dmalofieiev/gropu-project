const React = require('react');

module.exports = function Navbar({ userSession }) {
  return (
    <nav className="navbarContainer">
      <ul className="navbarList">
        {userSession?.user ? (
          <li className="navbar-li">
            <a href="/game" className="cardsBtn">
              Cards
            </a>
          </li>
        ) : null}
        <li className="navbar-li">
          <a href="#info" className="infoBtn">
            Info
          </a>
        </li>
        {userSession?.user ? (
          <li className="navbar-li">
            <a href="/profile" className="greeting">
              Hello, {userSession?.user}!{' '}
            </a>
          </li>
        ) : null}
      </ul>
      {userSession?.user ? (
        <div className="navbar-li">
          <a className="logoutBtn" href="/login/logout">
            Logout
          </a>
        </div>
      ) : (
        <div className="logRegBtnDiv">
          <div className="navbar-li">
            <a className="logoutBtn" href="/login">
              Login
            </a>
          </div>
          <div className="navbar-li">
            <a className="logoutBtn" href="/register">
              Registration
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
