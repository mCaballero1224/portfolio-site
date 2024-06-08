const express = require('express');
const router = express.Router();
const POST = require('../models/Post');

const adminLayout = '../../views/layouts/admin';

router.get('/admin', async (req, res) => {
	try {

		res.render('admin/index', { layout: adminLayout });

	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
