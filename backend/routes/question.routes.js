const router = require('express').Router();

const { verifyJwt } = require('../middleware');
const questions = require('../controllers/question.controller');

const questionRoutes = app => {
  router.get('/question',
    verifyJwt,
    questions.getQuestions
  );

  router.post('/question',
    verifyJwt,
    questions.createQuestion
  );

  router.put('/question/:id',
    verifyJwt,
    questions.updateQuestion
  );

  router.delete('/question/:id',
    verifyJwt,
    questions.deleteQuestion
  );

  app.use(router);
};

module.exports = questionRoutes;
