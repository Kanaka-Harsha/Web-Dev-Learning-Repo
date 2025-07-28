// 1. Import all the necessary packages
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

// 2. Configure our environment variables
dotenv.config();

// 3. Create the express app and define the port
const app = express();
const PORT = process.env.PORT || 3000;

// 4. Add middleware to our app
app.use(cors()); // Allows our server to receive requests from the browser
app.use(express.json()); // Allows our server to understand JSON data

// 5. Create the main route to send the email
app.post('/send-email', (req, res) => {
    // Destructure the data sent from the frontend form
    const { name, id, email } = req.body;

    // This is the "postal service" setup. We're telling it to use Gmail.
    // NEW & MORE SPECIFIC
// NEW - Trying port 587
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Using the TLS port instead of the SSL port
    secure: false, // Port 587 starts insecure and then upgrades to a secure connection
    auth: {
    user: process.env.EMAIL_USER, // Check this line
    pass: process.env.EMAIL_PASS, // Check this line
},
});

    // This is the actual email content
    const mailOptions = {
        from: `"Your App Name" <${process.env.EMAIL_USER}>`, // Sender's name and email
        to: email, // Recipient's email, taken from the form
        subject: 'Thank You for Your Submission!', // Subject line
        // You can use HTML for a fancier email body
        html: `
            <h1>Hello ${name}!</h1>
            <p>Thank you for submitting your details. We have received them successfully.</p>
            <p>Here is a copy of the information you provided:</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>ID:</strong> ${id}</li>
                <li><strong>Email:</strong> ${email}</li>
            </ul>
            <p>Best regards,<br>The Team</p>
        `,
    };

    // 6. Tell the transporter to send the mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            // Send a failure response back to the frontend
            return res.status(500).send({ message: 'Error sending email.', error: error.message });
        }
        console.log('Email sent: ' + info.response);
        // Send a success response back to the frontend
        res.status(200).send({ message: 'Email sent successfully!' });
    });
});

// 7. Start the server and listen for requests
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});