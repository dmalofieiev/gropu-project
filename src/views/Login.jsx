const React = require('react');
const Layout = require('./Layout');

module.exports = function Login(props) {
  return (
    <Layout>
      <div className="loginDiv reglogDiv">
        <form name="logForm">
          <p className="label">Email:</p>
          <input name="email" type="email" placeholder="Email" required />
          <p className="label">Password:</p>
          <input name="password" type="password" placeholder="Password" required />
          <br />
          <button className="logregBtn logBtn" type="submit">
            Log in
          </button>
        </form>
        <h3 className="userStatus"></h3>
      </div>
      <script src="/js/login.js" />
    </Layout>
  );
};
