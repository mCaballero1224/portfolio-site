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


/* 
 * GET /
 * Post :id
 */
router.get('/post/:id', async (req, res) => {
	const locals = {
		pageTitle: "Blog",
		flavorText: "Cause I have opinions."
	}

	let slug = req.params.id;

	try {
		const data = await Post.findById({ _id: slug }).lean();
		res.render('post', { locals, data });
	} catch(error) {
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


module.exports = router;
