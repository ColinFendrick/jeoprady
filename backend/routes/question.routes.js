const router = require('express').Router();

const { verifyJwt } = require('../middleware');
const questions = require('../controllers/questions.controller');

const questionRoutes = app => {
  router.get('/question',
    verifyJwt.verifyToken,
    questions.getQuestions
  );

  router.post('/question',
    verifyJwt.verifyToken,
    questions.createQuestion
  );

  app.use(router);
};

module.exports = questionRoutes;
