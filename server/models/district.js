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
                model: 'city',
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
    },
    // {
    //     classMethods: {
    //         associate: function (models) {
    //             district.belongsTo(models.city, {foreignKey: 'cityId'});
    //         }
    //     }
    // }
    );
    district.associate = (models) => {
        models.district.belongsTo(models.city, {
            foreignKey: 'cityId',
        });
    };
    return district;
};