'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('event', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            eventName: {
                type: Sequelize.STRING
            },
            detail: {
                type: Sequelize.STRING
            },
            start: {
                type: Sequelize.DATE
            },
            finish: {
                type: Sequelize.DATE
            },
            address: {
                type: Sequelize.STRING
            },
            latitude: {
                type: Sequelize.STRING
            },
            longitude: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('event');
    }
};