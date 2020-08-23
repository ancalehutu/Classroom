const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.students = require("../models/students.model.js")(sequelize, Sequelize);
db.teachers = require("../models/teachers.model.js")(sequelize, Sequelize);
db.classes = require("./classes.model.js")(sequelize, Sequelize);
db.grades = require("../models/grades.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.grades.belongsToMany(db.students, {
  through: "grades_students",
  foreignKey: "sid",
  otherKey: "id_student"
});

db.grades.belongsToMany(db.teachers, {
  through: "grades_teachers",
  foreignKey: "tid",
  otherKey: "id_teachers"
});

db.grades.belongsToMany(db.classes, {
  through: "grades_classes",
  foreignKey: "cid",
  otherKey: "id_class"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;