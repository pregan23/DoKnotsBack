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
      DoKnot.belongsTo(models.User, {foreignKey: 'userId'});
      DoKnot.hasMany(models.Streak, {foreignKey: 'doKnotId'})
    }
  }
  DoKnot.init({
    habit: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    alternatives: {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    share: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'DoKnot',
    tableName: 'doknots'
  });
  return DoKnot;
};