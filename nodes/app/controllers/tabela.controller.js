const db = require("../models");
const Tabela = db.tabelas;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tabelas
  const tabela = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Tabela in the database
  Tabela.create(tabela)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tabelas."
      });
    });
};

// Retrieve all Tabelas from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tabela.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tabelas."
      });
    });
};

// Find a single Tabela with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tabela.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tabela with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tabela with id=" + id
      });
    });
};

// Update a Tabela by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tabela.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tabela was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tabela with id=${id}. Maybe Tabela was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tabela with id=" + id
      });
    });
};

// Delete a tabelas with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tabela.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tabela was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tabela with id=${id}. Maybe Tabela was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tabela with id=" + id
      });
    });
};

// Delete all tabelas from the database.
exports.deleteAll = (req, res) => {
  Tabela.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tabela were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tabelas."
      });
    });
};

// find all published tabela
exports.findAllPublished = (req, res) => {
  Tabela.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tabelas."
      });
    });
};
