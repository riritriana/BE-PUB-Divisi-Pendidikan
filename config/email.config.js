const config = require('./config');
const nodemailer = require('nodemailer');
const pug = require('pug');

const SendEmail = async (emailData, emailTemplate) => {
    let transporter = nodemailer.createTransport({
        host: config.smtp_host,
        port: config.smtp_pass,
        secure: true,
        auth: {
            user: config.smtp_user,
            pass: config.smtp_pass,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const compiledFunction = pug.compileFile(emailTemplate);
    const emailHTML = compiledFunction(emailData);

    let email = await transporter.sendMail({
        from: `Onesmile <${config.smtp_user}>`,
        to: emailData.to,
        subject: emailData.subject,
        html: emailHTML,
    });

    return email;
};

module.exports = SendEmail;
