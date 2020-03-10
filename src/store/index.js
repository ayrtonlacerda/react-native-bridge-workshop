import create from 'zustand';

const [useStoreCount] = create(set => ({
  count: 0,
  addCount: () => set(state => ({count: state.count + 1})),
  subCount: () => set(state => ({count: state.count - 1})),
}));

export {useStoreCount};
