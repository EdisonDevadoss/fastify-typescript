module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      particular: {
        type: Sequelize.STRING(200),
        defaultValue: ''
      },
      income: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      giving: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      debt: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      taxes: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('expenses')
};