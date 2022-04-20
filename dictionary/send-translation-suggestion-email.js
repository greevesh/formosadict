"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config();

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.user, // generated ethereal user
      pass: process.env.password, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.user, // sender address
    to: process.env.email, // list of receivers
    subject: 'Translation Suggestion', // Subject line
    text: "Hello world?", // plain text body
    html: "<p>Traditional: <br> Simplified: <br> Pinyin: <br> English: "
          
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);