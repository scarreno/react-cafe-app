const DEFAULT_MESSAGES = {
    LOGIN_ERROR: 'Se ha producido un error al autenticar el usuario',
    DEFAULT_REQUIRED_FIELD: 'Requerido',
    NOT_AUTHORIZED: 'Usuario no autorizado'
}

const CONSTANTES = {
    GENERIC:{
        OPEN_DIALOG: 'OPEN_DIALOG',
        CLOSE_DIALOG: 'CLOSE_DIALOG',
    },
    LOGIN: {
        LOGIN_SUCCESS:'LOGIN_SUCCESS',
        LOGIN_ERROR:'LOGIN_ERROR',
        LOGOUT: 'LOGOUT'
    },
    USUARIOS:{
        GET_USUARIOS_SUCCESS:'GET_USUARIOS_SUCCESS',
        OPEN_CREAR_USUARIO_MODAL: 'OPEN_CREAR_USUARIO_MODAL',
        OPEN_EDITAR_USUARIO_MODAL: 'OPEN_EDITAR_USUARIO_MODAL',
        CLOSE_USUARIO_MODAL: 'CLOSE_USUARIO_MODAL',    
        CREATE_USUARIO_SUCCESS:'CREATE_USUARIO_SUCCESS',
        CREATE_USUARIO_ERROR:'CREATE_USUARIO_ERROR',
        GET_USUARIOS_LOADING: 'GET_USUARIOS_LOADING',
        UPDATE_USUARIO_SUCCESS:'UPDATE_USUARIO_SUCCESS',
        UPDATE_USUARIO_ERROR:'UPDATE_USUARIO_ERROR',
    },
    DEFAULT_MESSAGES
}



export default CONSTANTES;