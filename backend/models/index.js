const mongoose = require('mongoose');
const db = {};

db.Appusers = require('./appuser.model.js')(mongoose);

module.exports = db;
