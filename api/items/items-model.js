const db = require('../../data/dbConfig');

// Exports all helper functions for use in server.js
module.exports = {
	findAll,
	findById,
	findBy,
	add,
	update,
	remove
}

// Returns all item objects
async function findAll() {
	return db('items');
}

// Returns the item object with the specified id
async function findById(id) {
	// first() returns the first entry in the db matching the query
	return db('items').where({ id }).first();
}

// Returns an item that matches the filter
function findBy(filter) {
	return db('items').where(filter);
}

// Adds an item object to the database
async function add(item) {
	const [id] = await db('items').insert(item);

	return db('items').where({ id }).first();
}

// Updates a current item with the specified changes
async function update(id, changes) {
	await db('items').where({ id }).update(changes);

	return db('items').where({ id }).first();
}

// Removes the item object with the specified id
async function remove(id) {
	return await db('items').where({ id }).del();
}


