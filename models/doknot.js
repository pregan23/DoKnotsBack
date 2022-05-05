'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoKnot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DoKnot.init({
    habit: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    alternatives: DataTypes.ARRAY,
    share: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'DoKnot',
  });
  return DoKnot;
};