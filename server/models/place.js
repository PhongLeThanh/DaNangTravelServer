'use strict';
module.exports = (sequelize, DataTypes) => {
    var place = sequelize.define('place', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        locationId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'locations',
                key: 'id'
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        },
        placeName: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        detail: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        waypoint: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.INTEGER
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
    place.associate = function (models) {
        // associations can be defined here
    };
    return place;
};