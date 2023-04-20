const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/logreg.css" />
        <link rel="stylesheet" href="/css/game.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <title>Words</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
