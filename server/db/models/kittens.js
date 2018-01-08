'use strict';

const db = require('../index.js');
const Sequelize = require('sequelize');

const Kittens = db.define('Kittens', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Kittens;
