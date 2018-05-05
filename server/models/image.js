'use strict';
module.exports = (sequelize, DataTypes) => {
    var image = sequelize.define('image', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        placeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'place',
                key: 'id'
            }
        },
        imageName: {
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
    });
    image.associate = models => {
        models.image.belongsTo(models.place, {
            foreignKey: 'placeId'
        });
    }
    return image;
};