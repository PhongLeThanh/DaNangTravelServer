'use strict';

const comment = require('../models').comment;

module.exports = {
    up: (queryInterface, Sequelize) => {
        // return comment.create({
        //     userId: '1',
        //     placeId: '4',
        //     content: 'Câù quá đẹp và rực rỡ ... very beautiful <3',
        //     evaluate: '5'
        // })
        //     .then(user => {
        //         console.log(user);
        //     })
        //     .catch(err => {
        //         console.log(err);
            });
    },

    down: (queryInterface, Sequelize) => {

    }
};