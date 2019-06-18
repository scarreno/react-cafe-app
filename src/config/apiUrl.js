export const urlBase = process.env.REACT_APP_URL_BASE;

export const apiLogin = urlBase + '/api/v1/login';
export const apiGetUsuarios = (pageIndex, pageSize) => urlBase + '/api/v1/usuario?pageIndex=' + pageIndex + '&pageSize=' + pageSize;
export const apiCreateUsuarios = () => urlBase + '/api/v1/usuario';
export const apiEditUsuarios = (usuarioId) => urlBase + '/api/v1/usuario/' + usuarioId;
export const apiDeleteUsuarios = (usuarioId) => urlBase + '/api/v1/usuario/' + usuarioId;