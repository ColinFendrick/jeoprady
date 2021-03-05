const { verifySignUp } = require('../middleware');
const auth = require('../controllers/auth.controller');

const authRoutes = app => {

  const router = require('express').Router();

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

  app.use('/api/auth', router);
};

module.exports = authRoutes;
