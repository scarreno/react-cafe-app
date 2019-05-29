import CONSTANTES from './../../Constantes';
import mainState from './../../store/state';

export const reducerLogin = (state = mainState, action) => {

    switch (action.type) {
        case CONSTANTES.LOGIN.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                auth: {
                    ...state.auth,
                    isAuthenticated: true,
                    token: action.datos.token,
                    usuario: action.datos.usuario
                  },
                login: {
                    ...state.login,
                    errorMessage: '',
                    shouldShowAlert: false
                }                  
            });           
        case CONSTANTES.LOGIN.LOGIN_ERROR:
            return  Object.assign({}, state, {
                ...state,
                auth: {
                    ...state.auth,
                    isAuthenticated: false,
                    },
                login: {
                    ...state.login,
                    errorMessage: action.error.data.error.message
                    }                                  
                });         
        case CONSTANTES.LOGIN.OPEN_DIALOG:
                return  Object.assign({}, state, {
                    ...state,
                    login: {
                        ...state.login,
                        shouldShowAlert: true
                        }
                    });                         
        case CONSTANTES.LOGIN.CLOSE_DIALOG:
                return  Object.assign({}, state, {
                    ...state,
                    login: {
                        ...state.login,
                        shouldShowAlert: false
                        }
                    });                     
        default:
            return state;
    }
};
