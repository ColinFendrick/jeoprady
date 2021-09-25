const router = require('express').Router();

// const { verifyJwt } = require('../middleware');
const questions = require('../controllers/questions.controller');

const questionRoutes = app => {
  router.get('/questions', questions.getQuestions);

  app.use(router);
};

module.exports = questionRoutes;
