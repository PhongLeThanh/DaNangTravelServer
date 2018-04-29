'use strict';
const location = require('../models').location;
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return location.create({
        //     id: '4307',
        //     districtId: '4307',
        //     locationName: 'Cẩm Lệ',
        //     picture: '',
        //     description: '',
        //     map: '16.0159913,108.1741294'
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
