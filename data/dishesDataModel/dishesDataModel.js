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
    .join("recipes", "recipes.dish-name", "=", "dish.name")
    .select("dishes.name", "recipes.dish-name")
    .where({"dishes.id": id})

}