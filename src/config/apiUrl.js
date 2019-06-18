//export const urlBase = 'https://sergioc-rest-server-node.herokuapp.com';
export const urlBase = 'http://localhost:81';

export const apiLogin = urlBase + '/api/v1/login';
export const apiGetUsuarios = (pageIndex, pageSize) => urlBase + '/api/v1/usuario?pageIndex=' + pageIndex + '&pageSize=' + pageSize;
export const apiCreateUsuarios = () => urlBase + '/api/v1/usuario';
export const apiEditUsuarios = (usuarioId) => urlBase + '/api/v1/usuario/' + usuarioId;
export const apiDeleteUsuarios = (usuarioId) => urlBase + '/api/v1/usuario/' + usuarioId;