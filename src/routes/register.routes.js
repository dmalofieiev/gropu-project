const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');
const Registration = require('../views/Registration');

router.get('/', (req, res) => {
  renderTemplate(Registration, {}, res, req);
});

router.post('/', async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = await User.findOrCreate({
      where: { email },
      defaults: { userName, password: hashPass },
      raw: true,
    });
    if (newUser[1]) {
      res.json({ msg: 'User successfully created!' });
    } else {
      res.json({ msg: 'User with this email already exists!' });
    }
  } catch (error) {
    console.log('error: -------->', error);
    res.send(error);
  }
});

module.exports = router;
