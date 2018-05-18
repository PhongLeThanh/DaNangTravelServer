'use strict';
module.exports = (sequelize, DataTypes) => {
    var likeevent = sequelize.define('likeevent', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        eventId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
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
    likeevent.associate = function (models) {
        models.likeevent.belongsTo(models.user, {
            foreignKey: 'userId'
        });
        models.likeevent.belongsTo(models.event, {
            foreignKey: 'eventId'
        });
    };
    return likeevent;
};