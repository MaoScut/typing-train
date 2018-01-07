import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';
import Dictionary from '../dictionary';

const initialState = {
  before: {},
  current: {},
  dictionary: null,
};
const reducer = handleActions({
  [TYPES.SEND_DATA](state, action) {
    return {
      ...state,
      current: action.payload,
    };
  },
  [TYPES.RECEIVE_STATICS_DATA](state, action) {
    return {
      ...state,
      dictionary: new Dictionary(action.payload),
    };
  },
}, initialState);

export default reducer;
