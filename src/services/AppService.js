import http from '../http-common';

const healthcheck = async () => await http.get('/');

const getQuestions = async ({ accessToken }) =>
  await http.get('/question', {
    headers: {
      'x-access-token': accessToken
    }
  });

const createQuestion = async ({ question, answer }) =>
  await http.post('/question', { question, answer });

const updateQuestion = async ({ question, answer, id }) =>
  await http.put(`/question/${id}`, { question, answer });

const deleteQuestion = async ({ id }) =>
  await http.delete(`/question/${id}`);

const AppService = {
  healthcheck,
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion
};

export default AppService;
