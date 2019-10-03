'use strict';
module.exports = (sequelize, DataTypes) => {
  const ram = sequelize.define('ram', {
    RamId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    RamName: DataTypes.STRING,
    RamPrice: DataTypes.NUMERIC
  }, {});
  ram.associate = function (models) {
    // associations can be defined here
  };
  return ram;
};