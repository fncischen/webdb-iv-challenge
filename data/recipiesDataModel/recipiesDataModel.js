const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes, 
    addRecipe
}

function getRecipes() {
    return db("recipes");
}

function addRecipe(recipe) {
    return db("recipes").insert(recipe);
}

function getRecipesByDishName(dish_name) {
    return db("recipies").where({"dish-name": dish_name});
}