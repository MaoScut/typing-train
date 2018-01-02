import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const initialState = {
  trainOver: false,
  submitOver: false,
};

const reducer = handleActions({
  [TYPES.TRAIN_OVER](state) {
    return {
      ...state,
      trainOver: true,
    };
  },
  [TYPES.SUBMIT_OVER]() {
    return {
      trainOver: false,
      submitOver: true,
    };
  },
  [TYPES.SET]() {
    return initialState;
  },
}, initialState);

export default reducer;
