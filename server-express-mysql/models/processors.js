'use strict';
module.exports = (sequelize, DataTypes) => {
  const processors = sequelize.define('processors', {
    ProcessorId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ProcessorName: DataTypes.STRING,
    ProcessorPrice: DataTypes.NUMERIC
  }, {});
  processors.associate = function (models) {
    // associations can be defined here
  };
  return processors;
};