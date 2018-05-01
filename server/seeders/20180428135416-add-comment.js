'use strict';

const comment = require('../models').comment;

module.exports = {
    up: (queryInterface, Sequelize) => {
        // return comment.create({
        //     userId: '3',
        //     placeId: '6',
        //     content: 'Cầu Rồng có thiết kế hoành tráng và thể hiện rõ nét văn hoá Việt Nam .. very beautiful !',
        //     evaluate: '5'
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