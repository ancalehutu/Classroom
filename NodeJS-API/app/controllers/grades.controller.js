const db = require("../models");
const Grades = db.grades;
const Op = db.Sequelize.Op;

exports.adminBoardGrades = (req, res) => {
  Grades.create({
    sid: req.body.sid,
    tid: req.body.tid,
    cid: req.body.cid,
    grade: req.body.grade
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
  res.send({ message: "Grade was registered successfully!" });
};

exports.adminBoardGetGradeById = (req, res) => {
    const id = req.params.id;

    Grades.findAll({
        where: {
            sid: id
        }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Grade from Student with id=" + id
        });
      });
};
