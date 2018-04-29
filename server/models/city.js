'use strict';

module.exports = (sequelize, DataTypes) => {
    var city = sequelize.define('city', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        cityName: DataTypes.STRING,
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {});
    city.associate = function (models) {
        // associations can be defined here
    };
    return city;
};