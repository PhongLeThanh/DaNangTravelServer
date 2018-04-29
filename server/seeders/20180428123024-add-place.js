'use strict';
const place = require('../models').place;
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return place.create({
        //     locationId: '4301',
        //     categoryId: '3',
        //     placeName: 'Cầu Rồng Đà Nẵng',
        //     description: '',
        //     detail: '',
        //     address: 'Pham Van Dong, Quan Hai Chau, Da Nang',
        //     phone: '',
        //     waypoint: '16.0611696,108.2227882',
        //     rating: '5'
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
