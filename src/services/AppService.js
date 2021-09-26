import http from '../http-common';

const headers = accessToken => ({
  headers: {
    'x-access-token': accessToken
  }
});

const call = (method, url, data) => async accessToken =>
  await http[method](url, data || headers(accessToken), !data ? headers(accessToken) : null);

const healthcheck = async () => await http.get('/');

const getQuestions = call('get', '/question');
const createQuestion = args => call('post', '/question', args);
const updateQuestion = ({ id, ...args }) => call('put', `/question/${id}`, args);
const deleteQuestion = ({ id }) => call('delete', `/question/${id}`);

// const getQuestions = async accessToken =>
//   await http.get('/question', headers(accessToken));

// const createQuestion = async (accessToken, { question, answer }) =>
//   await http.post('/question', { question, answer }, headers(accessToken));

// const updateQuestion = async (accessToken, { question, answer, id }) =>
//   await http.put(`/question/${id}`, { question, answer }, headers(accessToken));

// const deleteQuestion = async (accessToken, { id }) =>
//   await http.delete(`/question/${id}`, headers(accessToken));

const AppService = {
  healthcheck,
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion
};

export default AppService;
