'use strict';
module.exports = (sequelize, DataTypes) => {
    var event = sequelize.define('event', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        eventName: {
            type: DataTypes.STRING
        },
        detail :{
            type: DataTypes.STRING
        },
        start: {
            type: DataTypes.DATE
        },
        finish: {
            type: DataTypes.DATE
        },
        address: {
            type: DataTypes.STRING
        },
        latitude: {
            type: DataTypes.STRING
        },
        longitude: {
            type: DataTypes.STRING
        },
        image: {
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
    event.associate = function (models) {
        models.event.hasMany(models.likeevent,{
            primaryKey:'id',foreignKey : 'eventId'
        });
    };
    return event;
};