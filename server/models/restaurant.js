'use strict';
module.exports = (sequelize, DataTypes) => {
    var restaurant = sequelize.define('restaurant', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            references: {
                model: 'places',
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
    }, {});
    restaurant.associate = function (models) {
        // associations can be defined here
    };
    return restaurant;
};