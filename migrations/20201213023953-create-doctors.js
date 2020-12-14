module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctors', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      CRM: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      fixFone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      fone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      andress: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      especialidade: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      especialidade2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doctors');
  },
};
