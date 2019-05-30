import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import mainState from './state';
import { reducerLogin } from './../componentes/Login/Reducer';
import { reducerUsuarios } from './../componentes/Usuarios/reducerUsuarios';


const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };

const reducers = combineReducers({
    authentication: reducerLogin,
    userData: reducerUsuarios
  });

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
                pReducer, 
                mainState,
                applyMiddleware(thunk));

export const persistor = persistStore(store);