'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.addColumn('streaks','isActive',{
     type:Sequelize.BOOLEAN
   });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('streaks','isActive');
  }
};
