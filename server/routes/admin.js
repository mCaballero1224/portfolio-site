const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLayout = '../../views/layouts/admin';
const jwtSecret = process.env.JWT_SECRET;

/**
	* GET /
	* Admin - Login/Regsiter forms 
**/
router.get('/admin', async (req, res) => {
	try {

		res.render('admin/index', {
			title: 'Admin Panel',
			layout: adminLayout 
		});
	} catch (error) {
		console.log(error);
	}
});

// Authentication Middleware
const authMiddleware = (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res.redirect('/admin');
	}

	try {
		const decoded = jwt.verify(token, jwtSecret); 
		req.userId = decoded.userId;
		next();
	} catch (error) {
		return res.status(401).json({ message: 'Unauthorized' });
	}
};


/**
	* POST /
	* Admin - Check Login 
**/
router.post('/admin', async (req, res) => {
	try {
		// pull info from the request body
		const { username, password } = req.body;

		// find user based on username
		const user = await User.findOne({ username });

		// if no user is found
		if (!user) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		// check password against hash
		const isPasswordValid = await bcrypt.compare(password, user.password);

		// if password is invalid
		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		// create token
		const token = jwt.sign({ userId: user._id }, jwtSecret );
		res.cookie('token', token, { httpOnly: true });
		res.redirect('/dashboard');

	} catch (error) {
		console.log(error);
	}
});

/**
	* GET /
	* Admin - Blog 
**/

router.get('/admin-blog', authMiddleware, async (req, res) => {
	try {
		const title = "Blog";
		const publishedPosts = await Post.aggregate([
			{$match: {published: true }},
			{$sort: { createdAt: -1 }}
		]);
		const draftPosts = await Post.aggregate([
			{ $match: { published: false } },
			{ $sort: { createdAt: -1 } }
		]);

		console.log(draftPosts);
		console.log(publishedPosts);
		res.render('admin/admin-blog', {
			layout: adminLayout,
			title: title,
			publishedPosts: publishedPosts,
			draftPosts: draftPosts
		});

	} catch (error) {
		console.log(error);
	}
});


/**
	* GET /
	* Admin - Dashboard 
**/

router.get('/dashboard', authMiddleware, async (req, res) => {
	try {
		const title = "Dashboard";
		res.render('admin/dashboard', {
			layout: adminLayout,
			title: title,
		});

	} catch (error) {
		console.log(error);
	}
});

/**
	* Get /
	* Admin - Create new blog post
**/
router.get("/add-post", authMiddleware, (req, res, next) => {
	try {
		const title = "Add Post";
		res.render('admin/add-post', { 
			title: title,
			layout: adminLayout,
		});
	} catch (error) {
		console.log(error);
	}
	
});

/**
	* POST /
	* Admin - Add new blog post 
**/
router.post("/add-post", authMiddleware, async (req, res, next) => {
	try {
		try {
			const newPost = new Post({
				title: req.body.title,
				body: req.body.body,
				published: req.body.published
			});

			await Post.create(newPost);
			res.redirect('/dashboard');
		} catch (error) {
			console.log(error);
		}
	} catch (error) {
		console.log(error);
	}
	
});

/**
	* GET /
	* Admin - Edit blog post
**/
router.get("/edit-post/:id", authMiddleware, async (req, res, next) => {
	try {
		const id = req.params.id;
		const post = await Post.findById({ _id: id }).lean();

		res.render('admin/edit-post', {
			title: 'View / Edit Post',
			layout: adminLayout,
			data: post,
		});
	} catch (error) {
		console.log(error);
	}
});

/**
	* PUT /
	* Admin - Update blog post
**/
router.put("/edit-post/:id", authMiddleware, async (req, res, next) => {
	try {
		await Post.findByIdAndUpdate(req.params.id, {
			title: req.body.title,
			body: req.body.body,
			updatedAt: Date.now(),
			published: req.body.published
		});

		res.redirect(`/edit-post/${req.params.id}`);
	} catch (error) {
		console.log(error);
	}
});

/**
	* DELETE /
	* Admin - Delete blog post
**/
router.delete('/delete-post/:id', authMiddleware, async (req, res, next) => {
	try {
		await Post.deleteOne({ _id: req.params.id });
		res.redirect('/admin-blog');
	} catch (error) {
		console.log(error);
	}
});

/**
	* POST /
	* Admin - Register 
**/
router.post('/register', async (req, res) => {
	try {
		const username = req.body.registerUsername;
		const password = req.body.registerPassword;
		const passwordConfirm = req.body.passwordConfirmation;

		if (password === passwordConfirm) {
			try {
				const hashedPassword = await bcrypt.hash(password, 10);
				const user = await User.create({ username, password: hashedPassword });
				res.status(201).json({ message: 'User Created', user });
			} catch (error) {
				if (error.code === 11000) {
					res.status(409).json({ message: 'User already in use' });
				}
				res.status(500).json({ message: 'Internal server error' });
			}

		} else {
			res.status(400).json({ message: 'Passwords do not match' });
		}

	} catch (error) {
		console.log(error);
	}
});


/**
	* DELETE /
	* Admin - Logout 
**/
router.get('/logout', (req, res) => {
	res.clearCookie('token');
	res.redirect('/');
});

module.exports = router;
