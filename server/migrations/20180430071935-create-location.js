'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('location', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            districtId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'district',
                    key: 'id'
                }
            },
            locationName: {
                type: Sequelize.STRING
            },
            picture: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            map: {
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
        return queryInterface.dropTable('location');
    }
};