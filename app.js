/* app.js */

/* ENV VARS */
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

/* SETUP */
const path = require('path'); // import path module
const express = require('express'); // use express library for the web server
// import handlebars
const { engine } = require('express-handlebars');
const exphbs = require('express-handlebars'); // 

const app = express(); // create instance of the express object to interact with the web server
app.engine('.hbs', engine({extname: ".hbs"})); // create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs'); // tell express to use the handlebars engine whenever encountering an ".hbs" file


/* Middleware */
app.use(express.static(path.join(__dirname, '/public'))); // serve "public" directory

/* Routes */

// main/index page
app.get('/', (req, res) => {
	res.render('index', { pageTitle: 'Welcome to my Terminal', flavorText: 'Feel free to poke about.'});
});

// about page
app.get('/about', (req, res) => {
	res.render('about', { pageTitle: 'About', flavorText: 'Who is this nerd?'});
});


// contact page
app.get('/contact', (req, res) => {
	res.render('contact', { pageTitle: 'Contact', flavorText: 'Hit me up!'});
});
/* Controllers */

/* Listener */
app.listen(PORT, () => {
	console.log(`Express started on http://localhost:${PORT}; press Ctrl-C to terminate.`);
});




