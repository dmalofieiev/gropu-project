const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');

router.get('/', (req, res) => {
  renderTemplate(Profile, {}, res, req);
});

module.exports = router;
