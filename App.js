import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Navigation from './src/navigation/Navigation';

//rsi - creating a React functional component

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
