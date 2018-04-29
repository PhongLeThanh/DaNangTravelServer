'use strict';
module.exports = (sequelize, DataTypes) => {
    var location = sequelize.define('location', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        districtID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'districts',
                key: 'id'
            }
        },
        locationName: {
            type: DataTypes.STRING
        },
        picture: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        map: {
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
    location.associate = function (models) {
        // associations can be defined here
    };
    return location;
};