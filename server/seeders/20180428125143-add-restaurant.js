'use strict';
const restaurant = require('../models').restaurant;
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return restaurant.create({
        //     id: '4',
        //     categoryId:'1',
        //     website: 'myquangbamua.com',
        //     time: '9am - 10pm everyday',
        //     moreInformation: 'Thong tin them ve thuc don'
        // })
        //     .then(restaurant => {
        //         console.log(restaurant)
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
