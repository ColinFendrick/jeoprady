import http from '../http-common';

const path = '/auth';

const register = ({ username, email, password }) =>
  http.post(`${path}/signup`, { username, email, password });

const login = async ({ username, password }) => {
  try {
    const response = await http.post(`${path}/signin`, {
      username,
      password
    });

    if (response.data.accessToken)
      localStorage.setItem('user', JSON.stringify(response.data));

    return response;
  } catch (e) {
    return e.response;
  }
};

const logout = () => localStorage.remoteItem('user');

const AuthService = {
  register,
  login,
  logout
};

export default AuthService;
