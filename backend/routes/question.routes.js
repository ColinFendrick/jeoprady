const router = require('express').Router();

// const { verifyJwt } = require('../middleware');
const { setHeaders } = require('../utils');
const questions = require('../controllers/questions.controller');

const questionRoutes = app => {
  setHeaders(router);

  router.get('/getQuestions', questions.getQuestions);

  app.use('/questions', router);
};

module.exports = questionRoutes;
