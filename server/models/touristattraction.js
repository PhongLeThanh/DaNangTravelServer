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
            type: DataTypes.TEXT
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    });
    touristattraction.associate = (models) => {
        models.touristattraction.belongsTo(models.place, {
            primaryKey: 'id', foreignKey: 'id'
        });
        models.touristattraction.belongsTo(models.category, {
            foreignKey: 'categoryId',
        });
    };
    return touristattraction;
};