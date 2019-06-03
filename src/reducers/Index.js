import { combineReducers  } from 'redux';
import { loginReducer } from './loginReducer';
import { usuariosReducer } from './usuariosReducer';
import { modalReducer } from './modalReducer';

const reducers = combineReducers({
    authentication: loginReducer,
    userData: usuariosReducer,
    modals: modalReducer
  });

export default reducers;