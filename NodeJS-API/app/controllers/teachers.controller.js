const db = require("../models");
const Teachers = db.teachers;
const Op = db.Sequelize.Op;

exports.adminBoardTeacher = (req, res) => {
  Teachers.create({
    id_teacher: req.body.id_teacher,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
  res.send({ message: "Teacher was registered successfully!" });
};

exports.adminBoardGetTeacher = (req, res) => {
  Teachers.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    });
};

exports.adminBoardUpdateTeacher = (req, res) => {
  const id = req.params.id;
  Teachers.update(req.body, {
    where: { id_teacher: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Teacher was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Teacher with id=${id}. Maybe Teacher was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Teacher with id=" + id
      });
    });
};

exports.adminBoardGetTeacherById = (req, res) => {
  const id = req.params.id;
  Teachers.findAll({
    where: { id_teacher: id }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teacher."
      });
    });
};