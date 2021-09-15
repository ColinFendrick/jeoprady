const mongoose = require('mongoose');
const db = {};

db.AppUsers = require('./appuser.model')(mongoose);
db.Questions = require('./question.model')(mongoose);

module.exports = db;
