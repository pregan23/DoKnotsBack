'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entry.belongsTo(models.User, {foreignKey: 'userId'})
    }
  }
  Entry.init({
    userId: {
      allowNull: false,
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull:false
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    share: {
      type: DataTypes.BOOLEAN,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Entry',
    tableName: 'entries'
  });
  return Entry;
};