const express = require("express");
const server = express();
const helmet = require("helmet"); 

const dishesRouter = require("./routers/dishesRouter.js")
const recipesRouter = require("./routers/recipesRouter.js")

server.use(express.json());
server.use(helmet());
server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

const port = 5000
server.listen(port, () => {
    console.log(`\n *** Listening on ${port} *** \n`);
})