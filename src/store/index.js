import create from 'zustand';

const [useStoreCount] = create(set => ({
  count: 0,
  increase: () => set(state => ({count: state.count + 1})),
  reset: () => set(state => ({count: state.count - 1})),
}));

export {useStoreCount};
