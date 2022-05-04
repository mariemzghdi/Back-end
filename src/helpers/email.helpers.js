const SignupMail = require('../mails/signup.mail');

class EmailHelper {
  static async loadTemplate(template, data) {
    switch (template) {
      case 'SIGNUP':
        data.firstname = data.firstname || data.email;
        SignupMail;
        break;
    }
  }
}

module.exports = EmailHelper;
