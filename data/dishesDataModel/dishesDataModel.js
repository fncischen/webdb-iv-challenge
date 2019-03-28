const db = require('../dbConfig.js');

module.exports = {
    getDishes,
    addDish,
    getDish 
}

function getDishes() {
    return db("dishes")
}

function addDish(dish) {
    return db("dishes").insert(dish);
}

// https://knexjs.org/#Builder-join
function getDish(id) {
    return db("dishes")
    .where("dishes.id", id)
    .join("recipes", "recipes.dish_name", "=", "dishes.name")
    // .select("dishes.id", id)

}

function goShopping(dish, recipe) {
    return db("dishes")
    .where("dishes.name", dish)
    .join("recipes", "recipes.dish_name", "=", "dishes.name")
    .where("recipe_name", recipe)
    .join("ingredients", "ingredients.recipe_name", "=", "recipe.recipe.name")
}

// sql output:
// select id, recipies.dish-name
// from Recipies, Dishes
// where recipies.dish-name: dishes.name
//       dishes.id: id 

// step 1) get dishes table
// step 2) join the dishes table to the recipies table, where the recipies name = dish name
// step 3) set the condition that the dishes id must equal to the id reqested by client 