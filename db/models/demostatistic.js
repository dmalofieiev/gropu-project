'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DemoStatistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Card, { foreignKey: 'cardId' });
      this.belongsTo(models.Deck, { foreignKey: 'deckId' });
    }
  }
  DemoStatistic.init(
    {
      userId: DataTypes.INTEGER,
      cardId: DataTypes.INTEGER,
      deckId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'DemoStatistic',
    }
  );
  return DemoStatistic;
};
