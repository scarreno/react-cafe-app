import mainState from '../store/mainState';
import CONSTANTES from '../Constantes';

export const modalReducer = (state = mainState, action) => {
    switch (action.type) {
        case CONSTANTES.USUARIOS.OPEN_CREAR_USUARIO_MODAL:
            return Object.assign({}, state, {
                ...state,
                shouldOpenCrearUsuarioModal: true
            });
        case CONSTANTES.USUARIOS.CLOSE_CREAR_USUARIO_MODAL:
            return Object.assign({}, state, {
                ...state,
                shouldOpenCrearUsuarioModal: false
            });         
        case CONSTANTES.GENERIC.OPEN_DIALOG:
            return  Object.assign({}, state, {
                ...state,
                errorAlert: {
                    shouldShowAlert: true,
                    errorMessage: action.error
                    }                                  
                });                         
        case CONSTANTES.GENERIC.CLOSE_DIALOG:
                return  Object.assign({}, state, {
                    ...state,
                    errorAlert: {
                        shouldShowAlert: false,
                        errorMessage: ''
                        }                                  
                    });                     

        default:
            return state;
    }
}