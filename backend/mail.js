const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: //insert the host,
    port: //insert port here,
    secure: true,
    auth: {
        user: //insert email username here,
        pass: //insert the passkey here,
    }
})
module.exports = transport;