'use strict';
module.exports = (sequelize, DataTypes) => {
  const graphics = sequelize.define('graphics', {
    GraphicsId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    GraphicsName: DataTypes.STRING,
    GraphicsPrice: DataTypes.NUMERIC
  }, {});
  graphics.associate = function (models) {
    // associations can be defined here
  };
  return graphics;
};