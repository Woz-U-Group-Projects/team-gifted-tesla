'use strict';
module.exports = (sequelize, DataTypes) => {
  const ssd = sequelize.define('ssd', {
    SsdId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    SsdName: DataTypes.STRING,
    SsdPrice: DataTypes.NUMERIC
  }, {});
  ssd.associate = function (models) {
    // associations can be defined here
  };
  return ssd;
};