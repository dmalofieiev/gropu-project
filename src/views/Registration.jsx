const React = require('react');
const Layout = require('./Layout');

module.exports = function Register(props) {
  return (
    <Layout>
      <div className="registerDiv reglogDiv">
        <form name="registerForm">
          <p className="label">User Name:</p>
          <input name="userName" type="text" placeholder="User name" required />
          <p className="label">Email:</p>
          <input name="email" type="email" placeholder="Email" required />
          <p className="label">Password:</p>
          <input name="password" type="password" placeholder="Password" required />
          <br />
          <button className="logregBtn regBtn" type="submit">
            Sing up
          </button>
        </form>
        <h3 className="userStatus"></h3>
      </div>
      <script src="/js/register.js" />
    </Layout>
  );
};
