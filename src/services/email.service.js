const sgMail = require('@sendgrid/mail');
const config = require('../config/environment');
sgMail.setApiKey(config.SENDGRID_API_KEY);

class EmailService {
  static async sendEmail(receiverEmail) {
    try {
      let fromEmail = config.From_Email;
      const msg = {
        from: fromEmail,
        to: receiverEmail,
        template_id: 'd-7183e4407a284df5ba8c89d9eb4f7733',
        dynamic_template_data: {
          subject: 'Testing Templates',
          name: 'Some One',
          city: 'Denver',
        },
      };
      console.log(msg);
      const result = await sgMail.send(msg);
      console.log('Test email sent successfully');
    } catch (e) {
      console.log('Error in sendEmail');
    }
  }
}

module.exports = EmailService;
