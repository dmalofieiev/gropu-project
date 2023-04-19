'use strict';

const currentCards = [
  {
    userId: 1,
    cardId: 1,
  },
  {
    userId: 1,
    cardId: 2,
  },
  {
    userId: 1,
    cardId: 3,
  },
  {
    userId: 1,
    cardId: 4,
  },
  {
    userId: 1,
    cardId: 5,
  },
  {
    userId: 1,
    cardId: 6,
  },
  {
    userId: 1,
    cardId: 21,
  },
  {
    userId: 1,
    cardId: 22,
  },
  {
    userId: 1,
    cardId: 23,
  },
  {
    userId: 1,
    cardId: 24,
  },
  {
    userId: 1,
    cardId: 25,
  },
  {
    userId: 1,
    cardId: 26,
  },
  {
    userId: 1,
    cardId: 27,
  },
  {
    userId: 1,
    cardId: 28,
  },
  {
    userId: 1,
    cardId: 29,
  },
  {
    userId: 1,
    cardId: 30,
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
