'use strict';

const category = [
  { title: 'Fruits and vegetables', userId: 1 },
  { title: 'Fashion and style', userId: 1 },
  { title: 'Body parts', userId: 1 },
  { title: 'Sports', userId: 1 },
  { title: 'Clothing', userId: 1 },
  { title: 'Foods and drinks', userId: 1 },
  { title: 'Jobs and professions', userId: 1 },
  { title: 'Musical instruments', userId: 1 },
  { title: 'School subjects', userId: 1 },
  { title: 'Family members', userId: 1 },
  { title: 'Emotions', userId: 1 },
  { title: 'Transportation', userId: 1 },
  { title: 'Numbers', userId: 1 },
  { title: 'Household items', userId: 1 },
  { title: 'Weather', userId: 1 },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Decks', category, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Decks', null, {});
  },
};
