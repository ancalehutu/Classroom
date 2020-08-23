const { authJwt } = require("../middlewares");
const controller = require("../controllers/students.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/test/admin/student",
    controller.adminBoardStudent
  );
  app.get(
    "/api/test/admin/getstudents",
    controller.adminBoardGetStudent
    );
    app.put(
      "/api/test/admin/updatestudents/:id",
      controller.adminBoardUpdateStudent
    );
    app.get(
      "/api/test/admin/getstudentsId/:id",
      controller.adminBoardGetStudentById
    );
};