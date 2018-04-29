'use strict';
module.exports = (sequelize, DataTypes) => {
  var touristAttraction = sequelize.define('touristAttraction', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER,
          references: {
              model: 'places',
              key: 'id'
          }
      },
      ticket: {
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
  touristAttraction.associate = function(models) {
    // associations can be defined here
  };
  return touristAttraction;
};