import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import signInReducer from './reducers/signInReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userSignedIn'],
};

const rootReducer = combineReducers({
  signInReducer: persistReducer(persistConfig, signInReducer),
});

const configureStore = () => createStore(rootReducer);
export const store = configureStore();
export const persistor = persistStore(store);
