const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const exphbs = require('express-handlebars');


/* Routes */

// home page
router.get('/', (req, res) => {
	const locals = {
		pageTitle: "Welcome to my Terminal",
		flavorText: "Feel free to poke about."
	};
	res.render('index', locals);
})

// about page
router.get('/about', (req, res) => {
	const locals = {
		pageTitle: "About Me",
		flavorText: "Who is this nerd?"
	};
	res.render('about', locals);
});

// blog page
router.get('/blog', async (req, res) => {
	const locals = {
		pageTitle: "Blog",
		flavorText: "Cause I have opinions."
	}

	// limit to 10 blog posts per page
	let perPage = 10;
	// current page number
	let page = req.query.page || 1;

	try {
		// get the Posts from the DB, sort by newest
		const data = await Post.aggregate([ {$sort: { createdAt: -1 }}])
		.skip(perPage * page - perPage)
		.limit(perPage)
		.exec();

		// get the count of Posts in the DB
		const count = await Post.find().count();
		// integers for prev/next page numbers
		const nextPage = parseInt(page) + 1;
		const prevPage = parseInt(page) - 1;
		// booleans for template rendering 
		const hasNextPage = nextPage <= Math.ceil(count / perPage);
		const hasPrevPage = nextPage > 2;

		// render the blog page based on the above variables
		res.render('blog', {
			locals, 
			data ,
			current: page,
			nextPage: hasNextPage ? nextPage : null,
			prevPage: hasPrevPage ? prevPage : null,
			hasNextPage: hasNextPage,
			hasPrevPage: hasPrevPage
		});

	} catch (error) {
		console.log(error);
	}
});


// contact page
router.get('/contact', (req, res) => {
	const locals = {
		pageTitle: "Contact",
		flavorText: "Hit me up!"
	};
	res.render('contact', locals);
});

/*
function insertPostData() {
	Post.insertMany([
		{
			title: "I use arch btw",
			body: "A brief history of my time with my favorite Linux distribution - Arch Linux."
		},
		{
			title: "Linux - Shell Scripting",
			body: "Shell scripts are great for automating stuff that would be a pain to do yourself on a regular basis."
		},
		{
			title: "Client/Server Model",
			body: "Hosting your own website means you'll be in charge of a server, with the web browser of potential viewers being your clients. What do these things mean? Let's dig into that."
		},
	]);
};
insertPostData();
*/

module.exports = router;
