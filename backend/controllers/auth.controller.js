const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../models');
const AppUser = db.AppUsers;

exports.signUp = async (req, res) => {
  const appUser = new AppUser({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  try {
    await appUser.save();
    res.send({
      data: {
        username: req.body.username,
        email: req.body.email,
        questions: appUser.questions,
        id: appUser._id
      },
      message: `${req.body.username} successfully created`
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.signIn = async (req, res) => {
  try {
    const appUser = await AppUser.findOne({ username: req.body.username });

    if (!appUser)
      return res.status(404).send({
        message: 'User Not found.'
      });

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      appUser.password
    );

    if (!passwordIsValid)
      return res.status(401).send({
        data: { accessToken: null },
        message: 'Invalid Password!'
      });

    const token = jwt.sign({
      id: appUser._id
    }, 'secrettoken', {
      expiresIn: 86400 // 24 hours
    });

    res.send({
      data: {
        username: appUser.username,
        email: appUser.email,
        questions: appUser.questions,
        id: appUser._id,
        accessToken: token
      },
      message: 'Token accepted. Sign in successful.'
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const appUser = await AppUser.findById(req.body.id);

    if (!appUser)
      return res.status(404).send({
        message: 'Cannot find your user credentials'
      });

    res.send({
      data: appUser,
      message: 'Successfully retrieved self data'
    });

  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

// ADMIN ROUTES
exports.getAllUsers = async (req, res) => {
  try {
    const users = await AppUser.find({});

    if (!users)
      return res.send({
        message: 'No Users Found'
      });

    res.send({ users });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
