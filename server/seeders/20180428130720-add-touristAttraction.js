'use strict';
const touristattraction = require('../models').touristAttraction;
module.exports = {
    up: (queryInterface, Sequelize) => {
        // return touristattraction.create({
        //     id: '4',
        //     cost: '0',
        //     moreInformation: 'Thong tin them ve dia diem'
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
