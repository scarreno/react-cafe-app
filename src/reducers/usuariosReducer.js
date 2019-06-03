import mainState from './../store/mainState';
import CONSTANTES from './../Constantes';

export const usuariosReducer = (state = mainState, action) => {
    switch (action.type) {
        case CONSTANTES.USUARIOS.GET_USUARIOS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                usuarios: action.datos
            });              
        default:
            return state;
    }
}