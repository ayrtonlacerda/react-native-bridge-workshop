import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {CountComponent} from './Count';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <CountComponent />
    </Provider>
  );
};

export default App;
