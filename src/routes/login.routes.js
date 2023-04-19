const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

router.get('/', (req, res) => {
  renderTemplate(Login, {}, res, req);
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.user = user.userName;
        req.session.userId = user.id;
        res.json({ msg: 'Success!', userName: user.userName });
      } else {
        res.json({ msg: 'Wrong password!' });
      }
    } else {
      res.json({ msg: 'User is not found, please sing up!' });
    }
  } catch (error) {
    console.log('error: -------->', error);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('TwitterCookie');
    res.redirect('/');
  });
});

module.exports = router;
