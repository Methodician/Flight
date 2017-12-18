import * as functions from 'firebase-functions';
// import * as nodemailer from 'nodemailer';


// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
// const mailTransport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: gmailEmail,
//         pass: gmailPassword
//     }
// });

export const emailContactSubmission = functions.firestore
    .document('contacts/{pushId}')
    .onCreate(e => {
        const data = e.data.data();
        return console.log(data);
        // const contactInfo = `Contact Name: ${data.name}
        // Contact Message: ${data.message}
        // Contact Phone: ${data.phone}`
        
        // const mailOptions: any = {
        //     from: '"Jacob Johnston" <jacob@flight.run>',
        //     to: 'methodician@gmail.com'
        // };

        // console.log(gmailEmail);
        // console.log(gmailPassword);

        // mailOptions.subject = 'New contact form request!';
        // mailOptions.text = contactInfo;

        // console.log(mailOptions);
        // console.log(contactInfo);
        // return mailOptions;
        // return mailTransport.sendMail(mailOptions)
        // .then(() => console.log('New contact form forwarded to info@flight.run'))
        // .catch(err => console.error('There was an error sending the email:', err));
    });