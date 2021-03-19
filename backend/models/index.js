const mongoose = require('mongoose');
const db = {};

db.AppUsers = require('./appuser.model.js')(mongoose);

module.exports = db;
