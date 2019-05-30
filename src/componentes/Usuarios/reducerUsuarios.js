import mainState from './../../store/state';
import CONSTANTES from './../../Constantes';

export const reducerUsuarios = (state = mainState, action) => {
    console.log('reducerUsuarios');
    console.log(action);
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