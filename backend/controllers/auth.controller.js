const bcrypt = require('bcryptjs');

const db = require('../models');

exports.signup = async (req, res) => {
  const appuser = new db.Appuser({
    username: 'test',
    email: 'test',
    password: bcrypt.hashSync('test', 8)
  });

  try {
    res.send(appuser);
  } catch (e) {
    res.status(400).send(e);
  }
};
