const AuthService = require('../services/auth.service');
const EmailService = require('../services/email.service');


class AuthController {
  static async signup(req, res, next) {
    try {
      const user = await AuthService.signup(req.body);
      await EmailService.sendEmail(user.email)
      return res.success(user);
    } catch (error) {
      return next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const user = await AuthService.login(req.body.email, req.body.password);
      return res.success(user);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = AuthController;
