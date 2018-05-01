'use strict';

const user = require('../models').user;

module.exports = {
    up: (queryInterface, Sequelize) => {
    //     return user.create({
    //         username: 'windlee',
    //         email: 'windlee@gmail.com',
    //         password: '123456',
    //         role: '2'
    //     })
    //         .then(user => {
    //             console.log(user);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    },

    down: (queryInterface, Sequelize) => {

    }
};