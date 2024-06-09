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

		res.render('admin/index', { layout: adminLayout });

	} catch (error) {
		console.log(error);
	}
});

// Authentication Middleware
const authMiddleware = (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({ message: 'Unauthorized' });
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
	* Admin - Dashboard 
**/

router.get('/dashboard', authMiddleware, async (req, res) => {
	res.render('admin/dashboard', { layout: adminLayout });
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


module.exports = router;
