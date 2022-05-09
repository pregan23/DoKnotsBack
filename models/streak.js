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
      Streak.belongsTo(models.User, {foreignKey: 'userId'});
      Streak.belongsTo(models.DoKnot, {foreignKey: 'doKnotId'})
    }
  }
  Streak.init({
    userId: {
      allowNull: false,
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    doKnotId: {
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'doknots',
        key: 'id'
      }
    },
    howLong: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Streak',
    tableName: 'streaks'
  });
  return Streak;
};