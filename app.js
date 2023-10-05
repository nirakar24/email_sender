const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ai.26.nirakar.jena@gmail.com', // Your email address
    pass: 'lucifer@1209', // Your email password
  },
});

// Define the email data
const mailOptions = {
  from: 'jenashubham60@gmail.com', // Sender's email address
  to: 'jenanirakar60@gmail.com', // Reciever's email address
  subject: 'Node project', // Email subject
  text: 'implementing an email sender using node.js', // Email content in plain text
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
