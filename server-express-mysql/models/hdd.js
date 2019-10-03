'use strict';
module.exports = (sequelize, DataTypes) => {
  const hdd = sequelize.define('hdd', {
    HddId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    HddName: DataTypes.STRING,
    HddPrice: DataTypes.NUMERIC
  }, {});
  hdd.associate = function (models) {
    // associations can be defined here
  };
  return hdd;
};