import React from 'react';
import {CountComponent} from './Count';
import {StoreProvider} from './store';

console.disableYellowBox = true;

const App = () => {
  return (
    <StoreProvider>
      <CountComponent />
    </StoreProvider>
  );
};

export default App;
