const bcrypt = require('bcryptjs');

const db = require('../models');

exports.signup = async (req, res) => {
  const appuser = new db.Appuser({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync('test', 8)
  });

  try {
    res.send(appuser);
  } catch (e) {
    res.status(400).send(e);
  }
};
