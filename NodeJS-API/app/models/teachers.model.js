module.exports = (sequelize, Sequelize) => {
    const Teachers = sequelize.define("teachers", {
      id_teacher: {
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
  
    return Teachers;
  };