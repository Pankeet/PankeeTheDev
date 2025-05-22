const express = require('express');
const app = express() ;
const nodemailer = require('nodemailer');
const { Router } = express() ;
require('dotenv').config() ;
const contact = Router();

app.use(express.json());

app.post('/send-mail', async function(req, res) {
  const {subject, text } = req.body;
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to : process.env.EMAIL_USER,
      subject,
      text,
    };

    const resp = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, resp });
  } 
  catch (err) {
    console.error('Mail send error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

