const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Layout = require('../views/Layout');
const Stat = require('../views/Stat');
const { DemoStatistic, Deck, Card } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Layout, {}, res);
});

router.get('/statistic', async (req, res) => {
  req.session.userId = 1;

  const allDecks = await Deck.findAll({
    where: { userId: req.session.userId },
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

  renderTemplate(Stat, { userStat }, res);
});

module.exports = router;
