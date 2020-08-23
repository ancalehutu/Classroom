const db = require("../models");
const Students = db.students;
const Op = db.Sequelize.Op;

exports.adminBoardStudent = (req, res) => {
  Students.create({
    id_student: req.body.id_student,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
  res.send({ message: "Student was registered successfully!" });
};

exports.adminBoardGetStudent = (req, res) => {
  Students.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students."
      });
    });
};

exports.adminBoardUpdateStudent = (req, res) => {
  const id = req.params.id;
  Students.update(req.body, {
    where: { id_student: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + id
      });
    });
};

exports.adminBoardGetStudentById = (req, res) => {
  const id = req.params.id;
  Students.findAll({
    where: { id_student: id }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving student."
      });
    });
};