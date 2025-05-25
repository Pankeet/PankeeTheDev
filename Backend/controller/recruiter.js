import express from 'express';
import nodemailer from 'nodemailer';
import recruiter from '../model/recruiterInfo.js';
import dotenv from 'dotenv'
dotenv.config();
const Router = express();

Router.post('/sendmail' , async (req , res) => {
    const { firstname , lastname , email , subject , message} = req.body;

    const findRecruiter = await recruiter.findOne({email});
    if(!findRecruiter){
        await recruiter.create({
            firstname , lastname , email
        })
    }

    const transporter = nodemailer.createTransport({
        service : 'gmail', 
        auth : {
        user : process.env.USER,
        password : process.env.PASS
        }
    });

    const mailOptions = {
        from : process.env.USER,
        to : process.env.ME,
        subject : email + ' ' + subject,
        text : message
    };

    transporter.sendMail(mailOptions , (err , data) => {
        if(err){
            console.error('Failed to send', err);
        }
        else{
            console.log("Message Sent Successfully");
        }
    })
})

export default Router;