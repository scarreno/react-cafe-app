//export const urlBase = 'https://sergioc-rest-server-node.herokuapp.com';
export const urlBase = 'http://localhost:3001';

export const apiLogin = urlBase + '/api/v1/login';
export const apiGetUsuarios = (pageIndex, pageSize) => urlBase + '/api/v1/usuario?pageIndex='+pageIndex+'&pageSize=' +pageSize;