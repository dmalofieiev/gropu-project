const React = require('react');
const Layout = require('./Layout');

module.exports = function Register(props) {
  return (
    <Layout>
      <div className="registerDiv">
        <form name="registerForm">
          <p>User Name:</p>
          <input name="userName" type="text" placeholder="User name" />
          <p>Email:</p>
          <input name="email" type="email" placeholder="Email" />
          <p>Password:</p>
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Sing up</button>
        </form>
        <h3 className="userStatus"></h3>
      </div>
      <script src="/js/register.js" />
    </Layout>
  );
};
