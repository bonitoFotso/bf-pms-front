// store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // ... d'autres réducteurs
});

const store = createStore(rootReducer);

export default store;
