import React, {useState} from 'react';

export const StoreContext = React.createContext([{}, () => {}]);

export const StoreProvider = props => {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);
  const subCount = () => setCount(count - 1);

  return (
    <StoreContext.Provider value={[count, setCount]}>
      {props.children}
    </StoreContext.Provider>
  );
};
