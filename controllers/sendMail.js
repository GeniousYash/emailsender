const nodemailer = require('nodemailer');


const sendMail = async(req, res) => {
     let testAccount = await nodemailer.createTestAccount();

     // connect with smtp server
     let transporter = nodemailer.createTransport({
          service:"gmail",
          host: "smtp.ethereal.email",
          port: 587,
          auth: {
               user: 'zenithcodecreations@gmail.com',
               pass: 'ofqelhofmdtkzkui'
          },
     });


     let info = await transporter.sendMail({
          from: `"Yash Singh" <zenithcodecreations@gmail.com>`,
          to: "singhyash3012@gmail.com",
          subject: "Hello Yash ",
          text: "Hello coder yash",
          html: "<b>Hello coder yash</b>",
     });

     console.log("Message sent: %s", info.messageId);
     res.json(info);

     res.send("I am sending mail");
}




module.exports = sendMail;