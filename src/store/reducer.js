import Types from './types';

const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        count: state.count + 1,
      };
    case Types.SUB:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
