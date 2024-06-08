const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
	const locals = {
		pageTitle: "Welcome to my Terminal",
		flavorText: "Feel free to poke about."
	};
	res.render('index', locals);
});

// about page
router.get('/about', (req, res) => {
	const locals = {
		pageTitle: "About Me",
		flavorText: "Who is this nerd?"
	};
	res.render('about', locals);
});

router.get('/blog', (req, res) => {
	const locals = {
		pageTitle: "Blog",
		flavorText: "Cause I have opinions."
	}
	res.render('blog', locals);
});


// contact page
router.get('/contact', (req, res) => {
	const locals = {
		pageTitle: "Contact",
		flavorText: "Hit me up!"
	};
	res.render('contact', locals);
});


module.exports = router;
