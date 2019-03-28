const router = require('express').Router();
const recipes = require("../data/recipiesDataModel/recipiesDataModel.js")

router.get("/", (req,res) => {
    recipes.getRecipes()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})

router.post("/", (req,res) => {
    recipes.post(req.body)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})


module.exports = router; 