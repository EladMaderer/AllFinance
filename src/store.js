import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import signInReducer from './reducers/signInReducer';
import signUpReducer from './reducers/signUpReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userSignedIn', 'email', 'userDetails'],
  // blacklist: ['userSignedIn', 'email', 'userDetails'],
};

const rootReducer = combineReducers({
  signInReducer: persistReducer(persistConfig, signInReducer),
  signUpReducer: persistReducer(persistConfig, signUpReducer),
});

const configureStore = () => createStore(rootReducer);
export const store = configureStore();
export const persistor = persistStore(store);
