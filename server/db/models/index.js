'use strict';

const db = require('../index.js');
const Users = require('./users');
const Kittens = require('./kittens');

Users.hasMany(Kittens);
Kittens.belongsTo(Users);

module.exports = db;
