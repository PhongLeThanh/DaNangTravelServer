'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('restaurant', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'place',
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
            website: {
                type: Sequelize.STRING
            },
            time: {
                type: Sequelize.STRING
            },
            moreInformation: {
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
        return queryInterface.dropTable('restaurant');
    }
};