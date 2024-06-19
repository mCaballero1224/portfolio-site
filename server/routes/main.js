const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const exphbs = require('express-handlebars');

const marked = require('marked');
const { JSDOM } = require('jsdom');
const createDOMPurify = require('dompurify');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);



const createCleanHTML = (rawMarkdown) => {
	const rawHTML = marked.parse(rawMarkdown);
	const sanitizedHTML = DOMPurify.sanitize(rawHTML);
	return sanitizedHTML
}


/* Routes */

// home page
router.get('/', (req, res) => {
	const locals = {
		pageTitle: "Welcome to my Terminal",
		flavorText: "Feel free to poke about.",
		currentRoute: '/'
	};
	res.render('index', locals);
})

// about page
router.get('/about', (req, res) => {
	const locals = {
		pageTitle: "About Me",
		flavorText: "Who is this nerd?",
		currentRoute: '/about'
	};
	res.render('about', locals);
});

// blog page
router.get('/blog', async (req, res) => {
	const locals = {
		pageTitle: "Blog",
		flavorText: "Cause I have opinions.",
		currentRoute: '/blog'
	}

	// limit to 10 blog posts per page
	let perPage = 10;
	// current page number
	let page = req.query.page || 1;

	try {
		// get the Posts from the DB, sort by newest
		const data = await Post.aggregate([
			{$sort: { createdAt: -1 }},
			{$match: { published: true }}
		])
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
			pageTitle: locals.pageTitle, 
			flavorText: locals.flavorText,
			data,
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

		const createdAt = new Date(data.createdAt);
		const updatedAt = new Date(data.updatedAt);
		let updated = false;

		if (updatedAt > createdAt) {
			updated = true;
		}

		const sanitizedBody = createCleanHTML(data.body);
		res.render('post', {
			pageTitle: locals.pageTitle,
			flavorText: locals.flavorText,
			blogTitle: data.title,
			blogBody: sanitizedBody,
			createdAt: data.createdAt,
			updatedAt: data.updatedAt,
			updated: updated
			
		});
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
