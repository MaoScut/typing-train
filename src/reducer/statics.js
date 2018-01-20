import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const defaultState = {
  singleCharData: null,
};

const reducer = handleActions({
  [TYPES.FETCHED_SINGLE_CHAR_DATA](state, action) {
    return {
      singleCharData: action.payload,
    };
  },
}, defaultState);

export default reducer;
