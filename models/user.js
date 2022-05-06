'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.DoKnot, {foreignKey:'userId'});
      User.hasMany(models.Streak, {foreignKey: 'userId'});
      User.hasMany(models.Entry, {foreignKey: 'userId'})

    }
  }
  User.init({
    userName: {
      type:DataTypes.STRING,
      allowNull: false,
        unique: true
      },
    passwordDigest: {
      type:DataTypes.STRING,
      allowNull: false,
      },
    hasLikedStreak: {
      type:DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue:[]
    },
    hasLikedEntry: {
      type:DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue:[]
    },

    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn1.iconfinder.com/data/icons/boating-knots-1/100/eight_knot-512.png'

    }

  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};