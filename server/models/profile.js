'use strict';
module.exports = (sequelize, DataTypes) => {
    var profile = sequelize.define('profile', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        fullname: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        phone: {
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
    },  {
        classMethods: {
            associate: function (models) {
                profile.belongsTo(models.user, {primaryKey: 'id'});
            }
        }
    });
    return profile;
};