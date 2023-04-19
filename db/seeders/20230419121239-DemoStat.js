'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DemoStatistics', [
      {
        userId: 1,
        deckId: 1,
        trueCount: 0,
      },
      {
        userId: 1,
        deckId: 2,
        trueCount: 10,
      },
      {
        userId: 1,
        deckId: 3,
        trueCount: 5,
      },
      {
        userId: 1,
        deckId: 4,
        trueCount: 20,
      },
      {
        userId: 1,
        deckId: 5,
        trueCount: 3,
      },
      {
        userId: 1,
        deckId: 6,
        trueCount: 12,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DemoStatistics', null, {});
  },
};
