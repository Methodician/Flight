"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});
exports.emailContactSubmission = functions.firestore
    .document('contacts/{pushId}')
    .onCreate(e => {
    const data = e.data.data();
    const contactInfo = `Contact Name: ${data.name}\r\n Contact Email: ${data.email}\r\n Contact Message: ${data.message}\r\n Contact Phone: ${data.phone}`;
    const mailOptions = {
        from: '"Jacob Johnston" <jacob@flight.run>',
        to: 'methodician@gmail.com',
        subject: 'New contact form request on flight.run!',
        text: contactInfo
    };
    return mailTransport.sendMail(mailOptions)
        .then(() => console.log('New contact form forwarded to info@flight.run'))
        .catch(err => console.error('There was an error sending the email:', err));
});
//# sourceMappingURL=index.js.map