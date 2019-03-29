const router = require('express').Router();
const dishes = require("../data/dishesDataModel/dishesDataModel.js")

router.get("/", (req,res) => {
    console.log("retrieving dishes!");
    dishes.getDishes()
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in retrieving your dishes!"}));
})

router.get("/:id", (req,res) => {
    console.log("retrieving dish ", req.params.id)
    dishes.getDish(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})

router.post("/", (req,res) => {
    dishes.addDish(req.body)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})

router.get("/:id/shoppinglist", (req,res) => {
    if(!req.body.dish || ! req.body.recipe) {
        return res.status(400).json({errorMessage: "You are missing a recipe or a dish for your shopping trip"})
    }
    else{
        dishes.goShopping(req.body.dish, req.body.recipe)
        .then(result => result.status(200).json(result))
        .catch(() => res.status(500).json({errorMessage: "We had issues creating our traffic trip"}))
    }
})

module.exports = router; 