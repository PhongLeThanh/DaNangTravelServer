'use strict';
module.exports = (sequelize, DataTypes) => {
  var hotel = sequelize.define('hotel', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER,
          references: {
              model: 'places',
              key: 'id'
          }
      },
      cost: {
          type: DataTypes.DOUBLE
      },
      moreInformation: {
          type: DataTypes.STRING
      },
      createdAt: {
          allowNull: false,
          type: DataTypes.DATE
      },
      updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
      }
  }, {});
  hotel.associate = function(models) {
    // associations can be defined here
  };
  return hotel;
};