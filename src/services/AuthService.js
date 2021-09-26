import http from '../http-common';

const path = '/auth';

const register = ({ username, email, password }) =>
  http.post(`${path}/signup`, { username, email, password });

const login = async ({ username, password }) => {
  const res = await http.post(`${path}/signin`, {
    username,
    password
  });

  if (res.data.accessToken)
    localStorage.setItem('user', JSON.stringify(res.data));

  return res;
};

const logout = () => localStorage.remoteItem('user');

const self = async () => await http.get(`${path}/self`);

const AuthService = {
  register,
  login,
  logout,
  self
};

export default AuthService;
