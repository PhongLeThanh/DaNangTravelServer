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
                model: 'user',
                key: 'id'
            }
        },
        placeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'place',
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
    });
    comment.associate = (models) =>{
        models.comment.belongsTo(models.user,{
            foreignKey: 'userId'
        });
        models.comment.belongsTo(models.place,{
            foreignKey: 'placeId'
        });
    }
    return comment;
};
