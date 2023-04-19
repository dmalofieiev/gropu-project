require('dotenv').config();
require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const React = require('react');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const express = require('express');


const dbCheck = require('./src/middlewares/dbCheck');
const isAuth = require('./src/middlewares/isAuth');
const deckGame = require('./src/routes/game.routes');

// Require routes


const app = express();
const PORT = process.env.PORT || 3001;

// Cookie
const sessionConfig = {
  name: 'TwitterCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};
app.use(session(sessionConfig)); // Подключаем сессии как middleware.
app.use('/login', (req, res, next) => {
  console.log('session=>', req.session);
  next();
});


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(dbCheck);

// Routes
app.use('/game', deckGame);

app.listen(PORT, () => {
  console.log('Server started');
});
