'use strict';
const event = require('../models').event;
module.exports = {
  up: (queryInterface, Sequelize) => {
      // return event.create({
          // eventName :"IRONMAN 70.3",
          // detail: "IRONMAN 70.3 Vietnam 2018 là sự kiện thể thao tầm vóc quốc tế lớn nhất được tổ chức tại Việt Nam với hơn 1400 người tham gia từ 59 quốc gia.",
          // start : "2018-06-17",
          // finish: "2018-06-18",
          // address: "Hyatt Regency Danang Resort & Spa , Đà Nẵng",
          // latitude : "16.0131183",
          // longitude :"108.2637083"
      })
          .then(event => {
              console.log(event)
          })
          .catch(err => {
              console.log(err)
          });
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
