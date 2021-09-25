const router = require('express').Router();

const { verifySignUp } = require('../middleware');
const auth = require('../controllers/auth.controller');

const authRoutes = app => {
  router.post('/signup',
    verifySignUp.checkDuplicateUsernameOrEmail,
    auth.signup
  );

  router.post('/signin', auth.signin);

  router.get('/appUsers', auth.getAllUsers);

  app.use('/auth', router);
};

module.exports = authRoutes;
