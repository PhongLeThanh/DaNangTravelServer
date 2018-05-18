'use strict';
module.exports = (sequelize, DataTypes) => {
  var likeplace = sequelize.define('likeplace', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      userId: {
          type: DataTypes.INTEGER,
          references: {
              model: 'user',
              key: 'id'
          }
      },
      placeId: {
          type: DataTypes.INTEGER,
          references: {
              model: 'place',
              key: 'id'
          }
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
  likeplace.associate = function(models) {
      models.likeplace.belongsTo(models.user, {
          foreignKey: 'userId'
      });
      models.likeplace.belongsTo(models.place, {
          foreignKey: 'placeId'
      });
  };
  return likeplace;
};