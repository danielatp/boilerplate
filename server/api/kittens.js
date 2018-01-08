//Routes for '/api/kittens'

const kittenRouter = require('express').Router();

kittenRouter.get('/', (req, res, next) => {
  res.status(200).send()
})

module.exports = kittenRouter;
