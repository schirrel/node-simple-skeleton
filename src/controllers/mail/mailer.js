module.exports = (() => {

    const database = require('../database/database');
    const template = require('./template');
    const nodemailer = require('nodemailer');
    const logger = require('../../utils/logger');

    const dotenv = require('dotenv');
    dotenv.config();

    let conf = null;

    const gmailEmail = 'alanemailsender@gmail.com';
    const gmailPassword = 'oNgDfQ3W71';
    let mailTransport = null;
    /* nodemailer.createTransport({
       service: 'Gmail',
       host: 'smtp.gmail.com',
       port: 465,
       secure: true,
       auth: {
           user: gmailEmail,
           pass: gmailPassword,
       },
   }); */
    let destinos = []
    //['desenvolvimento@sistemas.com.br', 'analise@sistemas.com.br'];
    let mailOptions = {
        from: ' Sistemas e Consultoria <alanemailsender@gmail.com>',
        subject: 'Monitoramento de Sistemas -  Sistemas e Consultoria'
    };

    const enviarEmail = (options) => {
        destinos.forEach(email => {
            logger.info(`sending email to ${email}`);
            options.to = email;
            mailTransport.sendMail(options)
                .then((res) => logger.info(`email sent to ${res.accepted.length ? res.accepted[0] : ' ERROR MOTHERFUCKER'}`))
                .catch((error) => logger.error(`There was an error while sending the email to ${email}:`, error));
        });

    };

    const createTransport = () => {
        mailTransport = nodemailer.createTransport({
            service: 'Gmail',
            host: conf.host,
            port: conf.port,
            secure: true,
            auth: {
                user: conf.email,
                pass: conf.senha,
            },
        });
    }
    const sendError = async (system, req) => {
        conf = await database.email.get(1, true);
        if (!conf) {
            throw "Configuração de email não econtrada"
        } else {
            createTransport();
            mailOptions.html = template.get(system, req);
            mailOptions.from = ` Sistemas e Consultoria <${conf.sender}>`;
            destinos = conf.destinations.split(';').filter(e => e && e.length && e.length > 1);
            if (process.env.MODE === 'production')
                enviarEmail(mailOptions);
            else {
                console.log('E-mail não enviado, em modo de desenvolvimento')
            }
        }

    };

    return {
        sendError: sendError
    };
})();