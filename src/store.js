import {createStore, combineReducers} from 'redux';
import signInReducer from './reducers/signInReducer';

const rootReducer = combineReducers({
  signInReducer,
});

const configureStore = () => createStore(rootReducer);
const store = configureStore();

export default store;
