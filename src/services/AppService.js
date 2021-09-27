import http from '../http-common';

const headers = accessToken => ({
  headers: {
    'x-access-token': accessToken
  }
});

const call = token => async (method, url, data) =>
  await http[method](url, data || headers(token), data ? headers(token) : null);

const healthcheck = async () => await http.get('/');

const getQuestions = token => () => call(token)('get', '/question');
const createQuestion = token => args => call(token)('post', '/question', args);
const updateQuestion = token => ({ id, ...args }) => call(token)('put', `/question/${id}`, args);
const deleteQuestion = token => ({ id }) => call(token)('delete', `/question/${id}`);

const AppService = {
  healthcheck,
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion
};

export default AppService;
