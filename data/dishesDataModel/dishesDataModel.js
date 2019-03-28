const db = require('../data/dbConfig.js');

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
    .join("recipes", "recipes.dish_name", "=", "dish.name")
    .where({"dishes.id": id})

}

// sql output:
// select id, recipies.dish-name
// from Recipies, Dishes
// where recipies.dish-name: dishes.name
//       dishes.id: id 

// step 1) get dishes table
// step 2) join the dishes table to the recipies table, where the recipies name = dish name
// step 3) set the condition that the dishes id must equal to the id reqested by client 