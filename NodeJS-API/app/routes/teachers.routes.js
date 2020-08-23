const { authJwt } = require("../middlewares");
const controller = require("../controllers/teachers.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/test/admin/teacher",
    controller.adminBoardTeacher
  );
  app.get(
    "/api/test/admin/getteachers",
    controller.adminBoardGetTeacher
    );
    app.put(
      "/api/test/admin/updateteachers/:id",
      controller.adminBoardUpdateTeacher
    );
    app.get(
      "/api/test/admin/getteachersId/:id",
      controller.adminBoardGetTeacherById
    );
};