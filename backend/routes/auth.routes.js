const router = require('express').Router();

const { verifySignUp, verifyJwt } = require('../middleware');
const auth = require('../controllers/auth.controller');

const authRoutes = app => {
  router.post('/signup',
    verifySignUp.checkDuplicateUsernameOrEmail,
    auth.signUp
  );

  router.post('/signin', auth.signIn);

  router.get('/self',
    verifyJwt.verifyToken,
    auth.getUser
  );

  // ADMIN ROUTES
  router.get('/appUsers', auth.getAllUsers);

  app.use('/auth', router);
};

module.exports = authRoutes;
