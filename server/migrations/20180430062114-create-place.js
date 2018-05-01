'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('place', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            locationId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'location',
                    key: 'id'
                }
            },
            categoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'category',
                    key: 'id'
                }
            },
            placeName: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            detail: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            phone:{
                type: Sequelize.STRING
            },
            waypoint: {
                type: Sequelize.STRING
            },
            rating: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('place');
    }
};