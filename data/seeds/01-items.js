
exports.seed = async function(knex) {
   await knex('items').insert([
      { name: 'item-01', enhancement: 15, durability: 77 },
      { name: 'item-02', enhancement: 17, durability: 43 },
      { name: 'item-03', enhancement: 12, durability: 97 },
      { name: 'item-04', enhancement: 20, durability: 0 },
      { name: 'item-05', enhancement: 16, durability: 15 },
      { name: 'item-06', enhancement: 5, durability: 100 },
      { name: 'item-07', enhancement: 10, durability: 87 },
      { name: 'item-08', enhancement: 20, durability: 36 },
      { name: 'item-09', enhancement: 6, durability: 25 },
      { name: 'item-10', enhancement: 15, durability: 59 },
   ])
}
