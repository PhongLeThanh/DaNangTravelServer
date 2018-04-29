'use strict';
const hotel = require('../models').hotel;
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return hotel.create({
        //     id: '2',
        //     cost: '2000000',
        //     moreInformation: 'Thong tin them ve dich vu'
        // })
        //     .then(hotel => {
        //         console.log(hotel)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     });
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
