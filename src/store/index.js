import create from 'zustand';
import axios from 'axios';

const reqAsyncTest = async set => {
  let payload = {
    token: 'ZeZbtyVMUKtipEdFZr4n2g',
    data: {
      name: 'nameFirst',
      email: 'internetEmail',
      phone: 'phoneHome',
      _repeat: 300,
    },
  };
  try {
    const response = await axios.get('https://app.fakejson.com/q', payload);
    console.log({status: response.status});
    set(_ => ({data: response.status}));
  } catch (error) {
    console.error(error);
  }
};

const [useStoreCount] = create(set => ({
  count: 0,
  data: null,
  increase: () => set(state => ({count: state.count + 1})),
  reset: () => set(state => ({count: state.count - 1})),
  asyncFunction: () => reqAsyncTest(set),
}));

export {useStoreCount};
