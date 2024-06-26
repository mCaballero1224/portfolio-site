/* app.js */

/* ENV VARS */
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

/* SETUP */
const connectDB = require('./server/config/db');
const path = require('path'); // import path module
const express = require('express'); // use express library for the web server
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const session = require('express-session');

// import handlebars
const { engine } = require('express-handlebars');
const exphbs = require('express-handlebars');  

// Helper functions 
const exphbsHelpers = require('./helpers/exphbsHelpers');

const app = express(); // create instance of the express object to interact with the web server

app.engine('.hbs', engine({
	extname: ".hbs",
	helpers: exphbsHelpers,
	partialsDir: ['views/partials/']
})); // create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs'); // tell express to use the handlebars engine whenever encountering an ".hbs" file

// Connect DB
connectDB();



/* Middleware */
app.use(express.static(path.join(__dirname, '/public'))); // serve "public" directory
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	store: MongoStore.create({
		mongoUrl: process.env.MONGODB_URI
	})

}));

/* Routes */
app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));
app.use('/', require('./server/routes/mailer'));

/* Controllers */

/* Listener */
app.listen(PORT, () => {
	console.log(`Express started on http://localhost:${PORT}; press Ctrl-C to terminate.`);
});




