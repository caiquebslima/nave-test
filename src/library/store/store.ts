import { createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import UserReducer from './user';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const rootReducer = combineReducers({
  user: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  let store: any = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
