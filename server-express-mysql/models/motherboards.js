'use strict';
module.exports = (sequelize, DataTypes) => {
  const motherboards = sequelize.define('motherboards', {
    MotherboardId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    MotherboardName: DataTypes.STRING,
    MotherboardPrice: DataTypes.NUMERIC
  }, {});
  motherboards.associate = function (models) {
    // associations can be defined here
  };
  return motherboards;
};