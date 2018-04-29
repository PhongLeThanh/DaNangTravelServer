'use strict';

const student = require('../models').student;

module.exports = {
  up: (queryInterface, Sequelize) => {
      // return student.create({
      //     name: 'Sách',
      //     class:'hehe'
      // })
      //     .then(book => {
      //         console.log(book);
      //     })
      //     .catch(err=> {
      //         console.log(err);
      //     });
  },

  down: (queryInterface, Sequelize) => {

  }
};