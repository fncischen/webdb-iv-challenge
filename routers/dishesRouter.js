const router = require('express').Router();
const dishes = require("../data/dishesDataModel/dishesDataModel.js")

router.get("/", (req,res) => {
    console.log("retrieving dishes!");
    dishes.getDishes()
    .then(result => res.status(200).json(result))
    .catch(() => res.status(500).json({errorMessage: "There was an error in retrieving your dishes!"}));
})

router.get("/:id", (req,res) => {
    dishes.getDish(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})

router.post("/", (req,res) => {
    dishes.addDish(req.body)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})

module.exports = router; 