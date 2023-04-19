const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Layout = require('../views/Layout');
const Stat = require('../views/Stat');
const { DemoStatistic, Deck, Card } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Layout, {}, res);
});

router.get('/statistic', async (req, res) => {
  // const userStat = DemoStatistic.findAll({
  //   where: { userId: req.session.userId },
  // });
  const userStat = await DemoStatistic.findAll({
    raw: true,
    nest: true,
    include: [{ model: Deck, attributes: ['title'] }],
  });
  const deckLength = await Promise.all(
    userStat.map(async (el) => {
      const card = await Card.findAll({
        where: { deckId: el.deckId },
        nest: true,
        raw: true,
      });
      return card;
    })
  );

  console.log(deckLength[0].length);
  renderTemplate(Stat, { userStat }, res);
});

module.exports = router;
