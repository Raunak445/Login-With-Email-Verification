// const nodemailer = require("nodemailer");

// module.exports = async (email, subject, text) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.HOST,
//       service: process.env.SERVICE,
//       port: Number(process.env.EMAIL_PORT),
//       secure: Boolean(process.env.SECURE),
//       auth: {
//         user: process.env.USER,
//         pass: process.env.PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.USER,
//       to: email,
//       subject: subject,
//       text: text,
//     });

//     console.log("Email Send Suceessfully");
//   } catch (error) {
//     console.log("Email not Sent ");
//     console.log(error);
//   }
// };



const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
    
      host: process.env.HOST,
      service: "gmail",
      port:465,
      secure: true,
      secureConnection:false,


      auth: {
        user:"raunakkumar445@gmail.com",
        pass: "ykla umlc ddsi adtk",
      },
      tls:{
        rejectUnauthorized:true
      }
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });

    console.log("Email sent successfully to:", email);
  } catch (error) {
    console.error("Error sending email to:", email);
    console.error(error); 
  }
};
