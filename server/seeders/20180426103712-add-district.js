'use strict';
const district = require('../models').district;
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return district.create({
        //     id: '4307',
        //     cityId: '43',
        //     districtName: 'Hoà Vang'
        // })
        //     .then(district => {
        //         console.log(district)
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
