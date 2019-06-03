import CONSTANTES from './../Constantes';
import mainState from '../store/mainState';

export const loginReducer = (state = mainState, action) => {

    switch (action.type) {
        case CONSTANTES.LOGIN.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                isAuthenticated: true,
                token: action.datos.token,
                usuario: action.datos.usuario,
                login: {
                    errorMessage: '',
                    shouldShowAlert: false
                }                  
            });           
        case CONSTANTES.LOGIN.LOGIN_ERROR:
            return  Object.assign({}, state, {
                ...state,
                isAuthenticated: false,
                login: {
                    ...state.login,
                    errorMessage: action.error.data.error.message
                    }                                  
                });         
        case CONSTANTES.LOGIN.LOGOUT:
            return  Object.assign({}, state, {
                ...state,
                isAuthenticated: false,
                token: '',
                usuario: {},
                });                                         
        default:
            return state;
    }
};
