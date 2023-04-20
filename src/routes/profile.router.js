const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');
const { DemoStatistic, Deck, Card } = require('../../db/models');

router.get('/', async (req, res) => {
  const allDecks = await Deck.findAll({
    raw: true,
  });

  const userStat = await Promise.all(
    allDecks.map(async (el) => {
      const cardCount = await Card.findAll({ where: { deckId: el.id } });
      el.cardCount = cardCount.map((el) => el.get({ plain: true }));
      const trueCardCount = await DemoStatistic.findAll({
        where: { userId: req.session.userId, deckId: el.id },
      });
      el.trueCardCount = trueCardCount.map((el) => el.get({ plain: true }));
      return el;
    })
  );
  renderTemplate(Profile, { userStat }, res, req);
});

module.exports = router;
