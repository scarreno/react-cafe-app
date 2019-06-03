import { createStore, applyMiddleware  } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import mainState from './mainState';
import reducers from './../reducers/Index';
import logger from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
                pReducer, 
                mainState,
                applyMiddleware(thunk,logger));

export const persistor = persistStore(store);