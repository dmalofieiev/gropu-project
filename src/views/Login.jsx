const React = require('react');
const Layout = require('./Layout');

module.exports = function Login(props) {
  return (
    <Layout>
      <div className="loginDiv">
        <form name="logForm">
          <p>Email:</p>
          <input name="email" type="email" placeholder="Email" />
          <p>Password:</p>
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </form>
        <h3 className="userStatus"></h3>
      </div>
      <script src="/js/login.js" />
    </Layout>
  );
};
