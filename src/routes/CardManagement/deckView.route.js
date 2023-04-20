const router = require('express').Router();
const { User, Deck, Card } = require('../../../db/models');
const renderTemplate = require('../../lib/renderTemplate');
const ViewDeck = require('../../views/CardManagement/ViewDeck');

router.get('/:deckTitle', async (req, res) => {
  const { deckTitle } = req.params;
  try {
    const deck = await Deck.findOne({ where: { title: deckTitle } });
    const deckId = deck.dataValues.id;
    const userDeckId = deck.dataValues.userId;
    const cards = await Card.findAll({ where: { deckId } });
    const clearCards = cards.map((el) => el.get({ plain: true }));
    renderTemplate(
      ViewDeck,
      { clearCards, userDeckId, deckTitle, deckId },
      res,
      req
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
