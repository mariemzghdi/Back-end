const jwt = require('jsonwebtoken');
const config = require('../config/environment');

const EXPIRES_IN_MINUTES = '24h'; // expires in 24 hours

class JwtHelper {
  static sign(payload) {
    const token = jwt.sign(payload, config.JWTSecret, {
      expiresIn: EXPIRES_IN_MINUTES,
    });
    return token;
  }

  static verify(token) {
    const decodedToken = jwt.verify(token, config.JWTSecret);

    return decodedToken;
  }
}

module.exports = JwtHelper;
