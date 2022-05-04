const bcrypt = require('bcrypt');

class PasswordHelper {
  static async passwordhash(password) {
    // generate salt to hash password
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }

  static async compare(password, hash) {
    const compare = await bcrypt.compare(password, hash);

    return compare;
  }
}

module.exports = PasswordHelper;
