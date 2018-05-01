'use strict';
module.exports = (sequelize, DataTypes) => {
    var category = sequelize.define('category', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        categoryName: {
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
    }, {
        classMethods: {
            associate :function (models) {

            }
        }
    });
    category.associate = function(models) {
        // associations can be defined here
    };
    return category;
};