/* eslint-disable max-len */
const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Deck, Card, DemoStatistic } = require('../../db/models');
const Game = require('../views/Game');

// * Пропсы передаются в ручках в момент вызова рендер-шаблона
router.get('/game', async (req, res) => {
  renderTemplate(Game, {}, res, req);
});

router.get('/game/deck', async (req, res) => {
  try {
    const deckGame = await Deck.findAll({ raw: true });
    res.json(deckGame);
  } catch (err) {
    console.log(err);
  }
});
router.get('/game/card/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deckCard = await Card.findAll({ where: { deckId: id }, raw: true });
    const deckStat = await DemoStatistic.findAll({
      where: { deckId: id, userId: req.session.userId },
      raw: true,
    });
    res.json({ deckCard, deckStat });
  } catch (err) {
    console.log(err);
  }
});

router.post('/game/status', async (req, res) => {
  const { deckId, cardId } = req.body;
  try {
    await DemoStatistic.create({ userId: req.session.userId, cardId, deckId });
    res.status(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
