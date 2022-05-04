module.exports = (app) => {
  var router = require("express").Router();
  const router = express.Router();
  const AuthController = require("../controllers/auth.controller");

  /**
   * POST /api/auth/signup
   */
  router.post("/signup", AuthController.signup);
  /**
   * POST /api/auth/login
   */
  router.post("/login", AuthController.login);
  app.use("/", router);
};
