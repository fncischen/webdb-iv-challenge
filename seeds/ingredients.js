
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: "pepperoni", recipe_name: 'pepperoni pizza'},
        {id: 2, name: "bread dough", recipe_name: 'pepperoni pizza'},
        {id: 3, name: "Pineapples", recipe_name: 'pineapple pizza'},
        {id: 4, name: "chocolate", recipe_name: 'chocolate cake'},
        {id: 5, name: "strawberry", recipe_name: 'strawberry cake'},
        {id: 6, name: "organic flour", recipe_name: 'strawberry cake'},
      ]);
    });
};
