// store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer, // Vous pouvez ajouter d'autres réducteurs ici
});

const userStore = createStore(userReducer);

export default userStore;
