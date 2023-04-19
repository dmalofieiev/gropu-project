'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Deck, { foreignKey: 'deckId' });
    }
  }
  Card.init(
    {
      en: DataTypes.STRING,
      ru: DataTypes.STRING,
      deckId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );
  return Card;
};
