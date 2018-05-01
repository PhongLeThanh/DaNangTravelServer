'use strict';
module.exports = (sequelize, DataTypes) => {
    var restaurant = sequelize.define('restaurant', {
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
        website: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.STRING
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
                restaurant.belongsTo(models.place, {primaryKey: 'placeId'});
                restaurant.belongsTo(models.category, {foreignKey: 'categoryId'});
            }
        }
    });
    return restaurant;
};