//Routes for "/api/..."

const apiRouter = require('express').Router();

apiRouter.use('/users', require('./users'));
apiRouter.use('/kittens', require('./kittens'));

apiRouter.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

module.exports = apiRouter;
