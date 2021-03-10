import { createStore, combineReducers, compose } from 'redux';
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
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: any = createStore(persistedReducer, composeEnhancers());
const persistor = persistStore(store);

export { store, persistor };
