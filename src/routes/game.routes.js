const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Deck, Card } = require('../../db/models');
const Game = require('../views/Game');

// * Пропсы передаются в ручках в момент вызова рендер-шаблона
router.get('/', async (req, res) => {
  renderTemplate(Game, {}, res, req);
});

router.get('/deck', async (req, res) => {
  try {
    const deckGame = await Deck.findAll({ raw: true });
    res.json(deckGame);
  } catch (err) {
    console.log(err);
  }
});
router.get('/card/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deckCard = await Card.findAll({ where: { deckId: id }, raw: true });
    res.json(deckCard);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
