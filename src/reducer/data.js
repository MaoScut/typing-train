import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const initialState = {
  before: {},
  current: {},
};
const reducer = handleActions({
  [TYPES.SEND_DATA](state, action) {
    return {
      ...state,
      current: action.payload,
    };
  },
}, initialState);

export default reducer;
