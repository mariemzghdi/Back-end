const httpStatus = require('http-status');
const PasswordHelper = require('../helpers/password.helper');
const User = require('../models/user.model');
const ErrorHandler = require('../helpers/apiError.helpers');
const JwtHelper = require('../helpers/jwt.helper');
const errorhttp = require('../helpers/errorhttp.helper');

class AuthService {
  /*   Function Register User */
  static async signup(userData) {
    if (userData.password) {
      userData.password = await PasswordHelper.passwordhash(userData.password);
    }
    const user = await User.create(userData);
    return user;
  }

  /**
   * Login Service
   * @param {*} email
   * @param {*} password
   * @returns
   */
  static async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new ErrorHandler(httpStatus.UNAUTHORIZED, errorhttp.notFound);
    }


    if (!compare) {
      throw new ErrorHandler(httpStatus.UNAUTHORIZED, errorhttp.forbidden);
    }
    const token = JwtHelper.sign({
      userId: user.id,
    });

    return {
      user,
      token,
    };
  }
}
module.exports = AuthService;
