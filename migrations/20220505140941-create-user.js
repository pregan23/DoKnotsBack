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
      avatar: {
        type: Sequelize.STRING,
        defaultValue: 'https://cdn1.iconfinder.com/data/icons/boating-knots-1/100/eight_knot-512.png'
  
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