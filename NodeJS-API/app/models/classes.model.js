module.exports = (sequelize, Sequelize) => {
    const Classes = sequelize.define("classes", {
      id_classes: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Classes;
  };