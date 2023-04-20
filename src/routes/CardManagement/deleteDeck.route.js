const router = require('express').Router();
const { Deck, Card, DemoStatistic } = require('../../../db/models');

router.delete('/:deckId', async (req, res) => {
  const { deckId } = req.params;
  try {
    const deck = await Deck.findOne({ where: { id: deckId } });
    const stat = await DemoStatistic.findAll({ where: { deckId } });
    if (stat.length > 0) {
      stat.forEach((el) => el.destroy());
    }
    const card = await Card.findAll({ where: { deckId } });
    if (card.length > 0) {
      card.forEach((el) => el.destroy());
    }
    await deck.destroy();
    res.json({ msg: 'Card deleted' });
  } catch (error) {
    console.log(error);
    res.json({ msg: 'Error' });
  }
});

module.exports = router;
