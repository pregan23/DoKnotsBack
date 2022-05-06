'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      passwordDigest: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hasLikedStreak: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        defaultValue:[]
      },
      hasLikedEntry: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        defaultValue:[]
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};