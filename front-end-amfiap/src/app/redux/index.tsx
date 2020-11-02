import { Store, applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { IApplicationState, rootReducer, rootSaga } from './ducks';

const persistConfig = {
  key: 'tela-unica',
  storage,
  whitelist: ['auth'],
};

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);
// Create Store
const store: Store<IApplicationState> = createStore(
  persistedReducer,
  enhancer as any,
);

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
