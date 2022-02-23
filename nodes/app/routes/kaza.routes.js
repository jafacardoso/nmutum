module.exports = app => {
  const tabelas = require("../controllers/tabela.controller.js");

  var router = require("express").Router();

  // Create a new Tabelas
  router.post("/", tabelas.create);

  // Retrieve all Tabelass
  router.get("/", tabelas.findAll);

  // Retrieve all published Tabelas
  router.get("/published", tabelas.findAllPublished);

  // Retrieve a single Tabelas with id
  router.get("/:id", tabelas.findOne);

  // Update a Tabelas with id
  router.put("/:id", tabelas.update);

  // Delete a Tabelas with id
  router.delete("/:id", tabelas.delete);

  // Delete all Tabelas
  router.delete("/", tabelas.deleteAll);

  app.use('/api/tabelas', router);
};
