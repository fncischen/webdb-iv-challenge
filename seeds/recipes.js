
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dish_name: 'pizza', recipe_name: "pinepapple pizza"},
        {id: 2, dish_name: 'pizza', recipe_name: "coconut pizza"},
        {id: 3, dish_name: 'pizza', recipe_name: "pepperoni pizza"},
        {id: 4, dish_name: 'cake', recipe_name: "chocolate cake"},
        {id: 5, dish_name: 'cake', recipe_name: "vanilla cake"},
        {id: 6, dish_name: 'cake', recipe_name: "strawberry cake"}
      ]);
    });
};
