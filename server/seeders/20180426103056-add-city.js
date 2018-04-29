'use strict';
const city = require('../models').city;
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return city.create({
        //     id: '43',
        //     cityName: 'Da Nang'
        // })
        //     .then(city => {
        //         console.log(city);
        //     })
        //     .catch(err => {
        //         console.log(err);
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
