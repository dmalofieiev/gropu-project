const router = require('express').Router();
const { User, Deck, Card } = require('../../../db/models');
const CreateNewDeck = require('../../views/CardManagement/CreateNewDeck');
const renderTemplate = require('../../lib/renderTemplate');

router.get('/:deckTitle', async (req, res) => {
  const { deckTitle } = req.params;
  try {
    const deck = await Deck.findOne({ where: { title: deckTitle } });
    const deckId = deck.dataValues.id;
    const cards = await Card.findAll({ where: { deckId } });
    const clearCards = cards.map((card) => card.get({ plain: true }));
    console.log(clearCards);
    renderTemplate(CreateNewDeck, { deckTitle, clearCards }, res, req);
  } catch (error) {
    console.log(error);
  }
});
router.post('/:deckTitle', async (req, res) => {
  const title = req.params.deckTitle;
  const { en, ru } = req.body;
  try {
    const deck = await Deck.findOne({ where: { title } });
    const deckId = deck.dataValues.id;
    console.log(deckId);
    const newCard = await Card.create({ en, ru, deckId });
    const clearCard = newCard.get({ plain: true });

    res.json({ msg: 'New Card Added', clearCard });
  } catch (error) {
    console.log(error);
    res.json({ msg: 'Error' });
  }
});

module.exports = router;
