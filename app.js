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

// Require route
const secMainRoute = require('./src/routes/secMain.route');
const registerRouter = require('./src/routes/register.routes');
const loginRouter = require('./src/routes/login.routes');
const profileRouter = require('./src/routes/profile.router');
const allDeckRouter = require('./src/routes/CardManagement/allDeck.route');
const viewDeckRoute = require('./src/routes/CardManagement/deckView.route');
const newDeckRoute = require('./src/routes/CardManagement/newDeck.route');
const newCardAddRoute = require('./src/routes/CardManagement/newCardAdd.route');
const deleteNewWordRoute = require('./src/routes/CardManagement/deleteNewword.route');

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

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/',isAuth, deckGame);
app.use('/profile', profileRouter);
app.use('/deck', allDeckRouter);
app.use('/view', viewDeckRoute);
app.use('/create', newDeckRoute);
app.use('/addNewCard', newCardAddRoute);
app.use('/delete/newcard', deleteNewWordRoute);

app.use('/', secMainRoute);

app.get('*', (req, res) => {
  res.redirect('/game');
})

app.listen(PORT, () => {
  console.log('Server started');
});
