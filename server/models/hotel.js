'use strict';
module.exports = (sequelize, DataTypes) => {
    var hotel = sequelize.define('hotel', {
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
    }, {
        classMethods: {
            associate: function (models) {
                hotel.belongsTo(models.place, {primaryKey: 'placeId'});
                hotel.belongsTo(models.category, {foreignKey: 'categoryId'});
            }
        }
    });
    return hotel;
};