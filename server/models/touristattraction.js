'use strict';
module.exports = (sequelize, DataTypes) => {
    var touristattraction = sequelize.define('touristattraction', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            references: {
                model: 'place',
                key: 'id'
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
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
    }, {
        classMethods: {
            associate: function (models) {
                touristattraction.belongsTo(models.place, {primaryKey: 'placeId'});
                touristattraction.belongsTo(models.category, {foreignKey: 'categoryId'});
            }
        }
    });
    return touristattraction;
};