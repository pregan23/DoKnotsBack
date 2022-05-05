'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Streak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Streak.init({
    userId: DataTypes.INTEGER,
    doKnotId: DataTypes.INTEGER,
    howLong: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Streak',
  });
  return Streak;
};