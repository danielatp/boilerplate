const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');
const index = path.join(__dirname, '../public')

const app = express();

app.use(morgan('dev'));
app.use(express.static(index));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

app.get('*', (req, res, next) => {
  res.sendFile(index);
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

module.exports = app;
