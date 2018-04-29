'use strict';
module.exports = (sequelize, DataTypes) => {
    var district = sequelize.define('district', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        districtName: {
            type: DataTypes.STRING
        },
        cityId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'cities',
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
    district.associate = function (models) {
        // associations can be defined here
    };
    return district;
};