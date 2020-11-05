const express = require('express');
const Items = require('./items-model');
const router = express.Router();

// Retrieve all items
router.get('/', async (req, res, next) => {
	try {
		const items  = await Items.findAll();
		res.json(items);
	} catch (err) {
		next(err);
	}
})

// Retrieves an item with the specified id
router.get('/:id', async (req, res, next) => {
	try {
		const item  = await Items.findById(req.params.id);
		res.json(item);
	} catch (err) {
		next(err);
	}
});

// Creates an item
router.post('/', async (req, res, next) => {
	try {
		const { name, enhancement, durability } = req.body;
		const item = await Items.findBy({ name }).first();

		if (item) {
			return res.status(409).json({
				message: 'The item name is already taken',
			});
		}

		const newItem = await Items.add({
			name,
			enhancement,
			durability
		})

		res.status(201).json(newItem);
	} catch (err) {
		next(err);
	}
})

// Updates a current item with the specified id
router.put('/:id', async (req, res, next) => {
	try {
		const item = await Items.update(req.params.id, req.body);

		res.json(item);
	} catch (err) {
		next(err);
	}
});


// Deletes an item and returns the updated list of items
router.delete('/:id', async (req, res, next) => {
	try {
		await Items.remove(req.params.id);
		const items  = await Items.findAll();
		res.json(items);
	} catch (err) {
		next(err)
	}
})

module.exports = router;