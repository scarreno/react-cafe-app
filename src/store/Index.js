import { createStore, applyMiddleware, compose  } from 'redux';
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

const middlewares = [];
let store = {};

middlewares.push(thunk);

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);

    const composeEnhancers =
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;

    const enhancer = composeEnhancers(applyMiddleware(...middlewares));
    store = createStore(pReducer, mainState, enhancer);
}else{
    store = createStore(
        pReducer,
        mainState,
        applyMiddleware(...middlewares)
      );
}
export { store };
export const persistor = persistStore(store);