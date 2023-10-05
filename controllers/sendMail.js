const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'janie.nitzsche@ethereal.email',
            pass: 'CJSCVB3rrnavtnTAQq'
        }
    });

    let content = await transporter.sendMail({
    from: 'janie.nitzsche@ethereal.email', 
    to: 'jenanirakar60@gmail.com', 
    subject: 'Node project', 
    text: 'implementing an email sender using node.js', 
    });

    console.log("Message sent: %s", content.messageId);

    res.json(content);  
};

module.exports = sendMail;