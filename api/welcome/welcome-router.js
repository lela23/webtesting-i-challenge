const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json({ message: 'Welcome to the API for the WebTesting-I-Challenge!' });
	} catch (err) {
		next(err);
	}
})

module.exports = router;