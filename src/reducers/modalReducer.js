import mainState from '../store/mainState';
import CONSTANTES from '../Constantes';

export const modalReducer = (state = mainState, action) => {
    switch (action.type) {
        case CONSTANTES.USUARIOS.OPEN_CREAR_USUARIO_MODAL:
            return Object.assign({}, state, {
                ...state,
                crearEditarUsuarioModal:{
                    shouldOpenCrearEditarUsuarioModal: true,
                    usuarioData: null,
                    isEditMode: false
                }                
            });
        case CONSTANTES.USUARIOS.CLOSE_USUARIO_MODAL:
            return Object.assign({}, state, {
                ...state,
                crearEditarUsuarioModal:{
                    shouldOpenCrearEditarUsuarioModal: false,
                    usuarioData: null,
                    isEditMode: false
                }                
            });         
            case CONSTANTES.USUARIOS.OPEN_EDITAR_USUARIO_MODAL:
                return Object.assign({}, state, {
                    ...state,
                    crearEditarUsuarioModal:{
                        shouldOpenCrearEditarUsuarioModal: true,
                        usuarioData: action.usuarioData,
                        isEditMode: true
                    }                
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