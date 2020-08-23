module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("students", {
      id_student: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Students;
  };