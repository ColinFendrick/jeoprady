import http from '../http-common';

const get = async () => await http.get('/');

const AppService = { get };

export default AppService;
