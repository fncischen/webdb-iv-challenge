const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes, 
    addRecipe,
    getRecipesByDishName
}

function getRecipes() {
    return db("recipes");
}

function addRecipe(recipe) {
    return db("recipes").insert(recipe);
}

function getRecipesByDishName(dish_name) {
    return db("recipes").where({"dish_name": dish_name});
}