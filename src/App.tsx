import React from 'react';
import AppNavigationContainer from './navigation/AppNavigationContainer';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <AppNavigationContainer />
  </Provider>
);

export default App;
