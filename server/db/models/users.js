'use strict';

const db = require('../index.js');
const Sequelize = require('sequelize');

const Users = db.define('Users', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Users;
