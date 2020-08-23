const { authJwt } = require("../middlewares");
const controller = require("../controllers/grades.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/test/admin/grades",
    controller.adminBoardGrades
  );
  app.get(
    "/api/test/admin/getgrades/:id",
    controller.adminBoardGetGradeById
    );
};