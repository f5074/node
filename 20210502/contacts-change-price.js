"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //아래에 작성하세요
    return queryInterface.changeColumn('Contacts', 'price', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // 아래에 작성하세요.

    return queryInterface.changeColumn('Contacts', 'price', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
