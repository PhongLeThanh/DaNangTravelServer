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
                model: 'location',
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
        rating: {
            type: DataTypes.INTEGER
        },
        longitude: {
            type: DataTypes.DOUBLE
        },
        latitude: {
            type: DataTypes.DOUBLE
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
    place.associate = (models) => {
        models.place.belongsTo(models.category, {
            foreignKey: 'categoryId',
        });
        models.place.belongsTo(models.location,{
           foreignKey: 'locationId',
        });
        models.place.hasOne(models.restaurant,{
            primaryKey: 'id', foreignKey : 'id'
        });
        models.place.hasOne(models.hotel,{
            primaryKey: 'id', foreignKey : 'id'
        });
        models.place.hasOne(models.touristattraction,{
            primaryKey: 'id', foreignKey : 'id'
        });
        models.place.hasMany(models.comment,{
            primaryKey:'id',foreignKey : 'placeId'
        });
        models.place.hasMany(models.image,{
            primaryKey:'id',foreignKey : 'placeId'
        });

    };
    return place;
};