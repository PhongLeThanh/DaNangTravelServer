'use strict';
const place = require('../models').place;
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return place.create({
        //     locationId: '4301',
        //     categoryId: '3',
        //     placeName: 'DaNang Dragon Brigde',
        //     description: '',
        //     detail: '',
        //     address: 'Pham Van Dong street, Da Nang',
        //     phone: '',
        //     waypoint: '16.0702991,108.2128939',
        //     rating: '5'
        // })
        //     .then(location => {
        //         console.log(location)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //   });
        // return place.create({
        //     locationId: '4301',
        //     categoryId: '1',
        //     placeName: 'My quang Ba Mua',
        //     description: '',
        //     detail: '',
        //     address: '19 Tran Binh Trong street, Da Nang',
        //     phone: '',
        //     waypoint: '16.0702988,108.212851',
        //     rating: '5'
        // })
        //     .then(location => {
        //         console.log(location)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     });
        // return place.create({
        //     locationId: '4301',
        //     categoryId: '2',
        //     placeName: 'DaNang Intercontinental Resort',
        //     description: '',
        //     detail: '',
        //     address: '30/4 street, Da Nang',
        //     phone: '',
        //     waypoint: '16.1198394,108.3049623',
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
