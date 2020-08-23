const db = require("../models");
const Classes = db.classes;
const Op = db.Sequelize.Op;

exports.adminBoardClasses = (req, res) => {
  Classes.create({
    id_classes: req.body.id_classes,
    name: req.body.name
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
  res.send({ message: "Class was registered successfully!" });
};

exports.adminBoardGetClasses = (req, res) => {
  Classes.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving classes."
      });
    });
};

exports.adminBoardUpdateClasses = (req, res) => {
  const id = req.params.id;
  Classes.update(req.body, {
    where: { id_classes: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Class was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Class with id=${id}. Maybe Class was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Class with id=" + id
      });
    });
};

exports.adminBoardGetClassById = (req, res) => {
  const id = req.params.id;
  Classes.findAll({
    where: { id_classes: id }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving class."
      });
    });
};