import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import mainState from './state';
import { reducerLogin } from './../componentes/Login/Reducer';

export const store = createStore(
                reducerLogin, 
                mainState,
                applyMiddleware(thunk));

