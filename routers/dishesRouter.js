const router = require('express').Router();
const dishes = require("../data/dishesDataModel/dishesDataModel.js")

router.get("/api/dishes", (req,res) => {
    dishes.getDishes()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})

router.get("/api/dishes/:id", (req,res) => {
    dishes.getDish(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})

router.post("/api/dishes", (req,res) => {
    dishes.addDish(req.body)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
})

module.exports = router; 