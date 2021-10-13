const router = require('express').Router();

const { verifyJwt, verifyUser } = require('../middleware');
const questions = require('../controllers/question.controller');

const questionRoutes = app => {
  router.get('/question',
    verifyJwt,
    verifyUser,
    questions.getQuestions
  );

  router.post('/question',
    verifyJwt,
    verifyUser,
    questions.createQuestion
  );

  router.put('/question/:id',
    verifyJwt,
    verifyUser,
    questions.updateQuestion
  );

  router.delete('/question/:id',
    verifyJwt,
    verifyUser,
    questions.deleteQuestion
  );

  app.use(router);
};

module.exports = questionRoutes;
