const router = require('express').Router();
const { User, Deck, Card } = require('../../../db/models');
const renderTemplate = require('../../lib/renderTemplate');
const CreateNewDeck = require('../../views/CardManagement/CreateNewDeck');

router.get('/:deckTitle', async (req, res) => {
  const { deckTitle } = req.params;
  const { userId } = req.session;
  try {
    const newDeck = await Deck.findOrCreate({
      where: { title: deckTitle },
      defaults: { userId },
    });
    if (newDeck[1]) {
      res.json({ msg: 'New Deck Created' });
    } else {
      res.json({ msg: 'Deck already exists' });
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: 'Error' });
  }
});

module.exports = router;
