'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.addColumn('Users','age',{
              type: Sequelize.INTEGER
          }),
          queryInterface.addColumn('Users','password',{
            type: Sequelize.STRING
        })
      ])
  }
}