
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("dishes").insert([
        {id: 1, name: 'pizza'},
        {id: 2, name: 'cake'},
        {id: 3, name: 'steak'}
      ]);
    });
};
