'use strict';
module.exports = (sequelize, DataTypes) => {
    var location = sequelize.define('location', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        districtId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'district',
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
    },
    //     {
    //     classMethods: {
    //         associate: function (models) {
    //             location.belongsTo(models.district, {foreignKey: 'districtId'});
    //         }
    //     }
    // }
    );
    location.associate = (models) => {
        models.location.belongsTo(models.district, {
            foreignKey: 'districtId',
        });
    };
    return location;
};