module.exports = (sequelize, Sequelize) => {
  const Tabela = sequelize.define("tabela", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tabela;
};
