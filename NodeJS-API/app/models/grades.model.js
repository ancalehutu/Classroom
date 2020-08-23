module.exports = (sequelize, Sequelize) => {
    const Grades = sequelize.define("grades", {
      sid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      cid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      grade: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Grades;
  };