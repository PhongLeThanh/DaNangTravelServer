'use strict';
module.exports = (sequelize, DataTypes) => {
    var comment = sequelize.define('comment', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        placeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'places',
                key: 'id'
            }
        },
        content: {
            type: DataTypes.STRING
        },
        evaluate: {
            type: DataTypes.INTEGER
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
    comment.associate = function (models) {
        // associations can be defined here
    };
    return comment;
};