//Routes for "/api/users"

const usersRouter = require('express').Router();

usersRouter.get('/', (req, res, next) => {
  res.status(200).send()
})

module.exports = usersRouter;
