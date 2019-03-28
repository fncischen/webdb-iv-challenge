const express = require("express");
const server = express(); 

const dishesRouter = require("./routers/dishesRouter.js")
const recipesRouter = require("./routers/recipesRouter.js")

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

const port = 500
server.listen(port, () => {
    console.log(`\n *** Listening on ${port} *** \n`);
})