'use strict';

const profile = require('../models').profile;

module.exports = {
    up: (queryInterface, Sequelize) => {
        // return profile.create({
        //     id: '1',
        //     fullname: 'Ad van Min',
        //     age: '23',
        //     address: 'Hai Chau, Da Nang',
        //     avatar: '',
        //     phone: '0986758342'
        // })
        //     .then(user => {
        //         console.log(user);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    },

    down: (queryInterface, Sequelize) => {

    }
};