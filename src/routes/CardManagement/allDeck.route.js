const router = require('express').Router();
const { User, Deck } = require('../../../db/models');
const renderTemplate = require('../../lib/renderTemplate');
const Profile = require('../../views/CardManagement/AllCards');

router.get('/', async (req, res) => {
  const { userId } = req.session;
  try {
    const deckTitles = await Deck.findAll({
      where: { userId: [userId] },
    });
    const clearDeckTitles = deckTitles.map((deck) => deck.get({ plain: true }));
    renderTemplate(Profile, { clearDeckTitles }, res, req);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
