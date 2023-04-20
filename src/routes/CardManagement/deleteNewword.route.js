const router = require('express').Router();
const { User, Deck, Card } = require('../../../db/models');

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const card = await Card.findOne({ where: { id } });
    await card.destroy();
    res.json({ msg: 'Card deleted' });
  } catch (error) {
    console.log(error);
    res.json({ msg: 'Error' });
  }
});
module.exports = router;
