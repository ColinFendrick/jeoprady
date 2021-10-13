const router = require('express').Router();

const {
  checkDuplicateUsernameOrEmail,
  verifyJwt,
  verifyAdmin,
  verifyUser
} = require('../middleware');
const auth = require('../controllers/auth.controller');

const authRoutes = app => {
  router.post('/signup',
    checkDuplicateUsernameOrEmail,
    auth.signUp
  );

  router.post('/signin', auth.signIn);

  router.get('/self',
    verifyJwt,
    verifyUser,
    auth.getUser
  );

  // ADMIN ROUTES
  router.get('/appUsers', verifyAdmin, auth.getAllUsers);

  app.use('/auth', router);
};

module.exports = authRoutes;
