'use strict';
const category = require('../models').category;
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return category.create({
        //     categoryName: 'touristattraction'
        // })
        //     .then(location => {
        //         console.log(location)
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
