const router = require('express').Router();

const { verifySignUp } = require('../middleware');
const auth = require('../controllers/auth.controller');

const authRoutes = app => {
  router.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

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
