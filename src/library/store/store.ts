import { createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import UserReducer from './user';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const storePersistor = () => {
  let store: any = createStore(persistedReducer, composeEnhancers());
  let persistor = persistStore(store);
  return { store, persistor };
};

export default storePersistor;
