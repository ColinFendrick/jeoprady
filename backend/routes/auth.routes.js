const router = require('express').Router();

const { verifySignUp } = require('../middleware');
const { setHeaders } = require('../utils');
const auth = require('../controllers/auth.controller');

const authRoutes = app => {
  setHeaders(router);

  router.post('/signup',
    verifySignUp.checkDuplicateUsernameOrEmail,
    auth.signup
  );

  router.post('/signin',
    auth.signin
  );

  app.use('/auth', router);
};

module.exports = authRoutes;
