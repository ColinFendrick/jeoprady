import http from '../http-common';

const get = () => http.get('/');

const AppService = { get };

export default AppService;
