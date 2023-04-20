'use strict';

const currentCards = [
  {
    userId: 1,
    cardId: 1,
    deckId: 1,
  },
  {
    userId: 1,
    cardId: 2,
    deckId: 1,
  },
  {
    userId: 1,
    cardId: 3,
    deckId: 1,
  },
  {
    userId: 1,
    cardId: 4,
    deckId: 1,
  },
  {
    userId: 1,
    cardId: 5,
    deckId: 1,
  },
  {
    userId: 1,
    cardId: 6,
    deckId: 1,
  },
  {
    userId: 1,
    cardId: 21,
    deckId: 2,

  },
  {
    userId: 1,
    cardId: 22,
    deckId: 2,

  },
  {
    userId: 1,
    cardId: 23,
    deckId: 2,
  },
  {
    userId: 1,
    cardId: 24,
    deckId: 2,
  },
  {
    userId: 1,
    cardId: 25,
    deckId: 2,
  },
  {
    userId: 1,
    cardId: 26,
    deckId: 2,
  },
  {
    userId: 1,
    cardId: 27,
    deckId: 2,
  },
  {
    userId: 1,
    cardId: 28,
    deckId: 2,
  },
  {
    userId: 1,
    cardId: 29,
    deckId: 2,
  },
  {
    userId: 1,
    cardId: 30,
    deckId: 2,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DemoStatistics', currentCards, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DemoStatistics', null, {});
  },
};
