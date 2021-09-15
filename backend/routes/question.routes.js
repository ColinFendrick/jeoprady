const router = require('express').Router();

// const { verifyJwt } = require('../middleware');
const questions = require('../controllers/questions.controller');

const questionRoutes = app => {
  router.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  router.get('/getQuestions', questions.getQuestions);

  app.use('/questions', router);
};

module.exports = questionRoutes;
