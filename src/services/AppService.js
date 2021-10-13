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

const addPlayer = token => args => call(token)('post', '/player', args);
const deleteUser = token => args => call(token)('delete', '/player', args);
const updateScore = token => args => call(token)('post', '/score', args);

const AppService = {
  healthcheck,
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  addPlayer,
  deleteUser,
  updateScore
};

export default AppService;
