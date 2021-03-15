const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

exports.signin = async (req, res) => {
  try {
    const appuser = await db.Appuser.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!appuser)
      return res.status(404).send({
        message: 'User Not found.'
      });


    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      appuser.password
    );

    if (!passwordIsValid)
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!'
      });


    const token = jwt.sign({
      id: appuser.id
    }, 'secrettoken', {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
      id: appuser.id,
      username: appuser.username,
      email: appuser.email,
      accessToken: token
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
