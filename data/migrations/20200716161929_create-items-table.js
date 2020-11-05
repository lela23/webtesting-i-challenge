
exports.up = async function(knex) {
	await knex.schema.createTable('items', tbl => {
		tbl.increments();
		tbl.text('name', 128).notNullable().unique();
		tbl.integer('enhancement').notNullable();
		tbl.integer('durability').notNullable();
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('items');
}