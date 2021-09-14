import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import signInReducer from './reducers/signInReducer';
import signUpReducer from './reducers/signUpReducer';

const signInPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userSignedIn', 'loggedUser'],
};

const signUpPersistConfig = {
  key: 'signUpReducer',
  storage: AsyncStorage,
  whitelist: ['registeredUsers'],
};

const rootReducer = combineReducers({
  signInReducer: persistReducer(signInPersistConfig, signInReducer),
  signUpReducer: persistReducer(signUpPersistConfig, signUpReducer),
});

const configureStore = () => createStore(rootReducer);
export const store = configureStore();
export const persistor = persistStore(store);
