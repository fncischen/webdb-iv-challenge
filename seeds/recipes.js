
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dish_name: 'pizza', recipe_name: "pinepapple pizza", amount_of_ingredients: "30", units: "grams" },
        {id: 2, dish_name: 'pizza', recipe_name: "coconut pizza", amount_of_ingredients: "30", units: "grams" },
        {id: 3, dish_name: 'pizza', recipe_name: "pepperoni pizza", amount_of_ingredients: "30", units: "grams" },
        {id: 4, dish_name: 'cake', recipe_name: "chocolate cake", amount_of_ingredients: "30", units: "grams" },
        {id: 5, dish_name: 'cake', recipe_name: "vanilla cake", amount_of_ingredients: "30", units: "grams" },
        {id: 6, dish_name: 'cake', recipe_name: "strawberry cake", amount_of_ingredients: "30", units: "grams" }
      ]);
    });
};
