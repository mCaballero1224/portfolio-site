const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/mailer', (req, res) => {
	const formData = req.body;
	sendMail(formData);
});

const sendMail = (formData) => {
	console.log(formData);
	const fname = formData.fname;
	const lname = formData.lname;
	const email = formData.email;
	const message = formData.message;
	const navigation = formData.navigation;
	const interest = formData.interest;
	const improvements = formData.improvements;
	const reccomendation = formData.reccomendation;

	const emailText = `
		Message Received from: ${fname} ${lname}
		${fname} ${lname}'s email: ${email}
		Message body: ${message}
		
		${fname} ${lname}'s reveiw: 
		Ease of Navigation: ${navigation}
		Areas of Interest: ${interest}
		Would you reccomend the site to anyone?: ${reccomendation}
	`;

	const emailHtml = `
		<h2>Message Received from: ${fname} ${lname}</h2>
		<p>${fname} ${lname}'s email: ${email}</p>
		Message body: ${message}
		
		<h2>${fname} ${lname}'s reveiw:</h2>
		<P>Ease of Navigation: ${navigation}</p>
		<p>Areas of Interest: ${interest}</p>
		<p>Would you reccomend the site to anyone?: ${reccomendation}</p>
	`;

	const transporter = nodemailer.createTransport({
		service: "Gmail",
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.NODEMAILER_USER,
			pass: process.env.NODEMAILER_PASS,
		}
	});

	const mailOptions = {
		from: email,
		to: process.env.NODEMAILER_USER,
		subject: 'NODEMAILER - Contact form received',
		text: emailText,
		html: emailHtml
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log("Error sending email: ", error);
		} else {
			console.log("Email sent: ", info.response);
		}
	});
}


module.exports = router;
