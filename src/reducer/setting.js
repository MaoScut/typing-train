import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const defaultState = {
  speed: 1,
  fontSize: 14,
};

const reducer = handleActions({
  [TYPES.SET_FONT_SIZE_AND_SPEED](state, action) {
    return {
      speed: action.payload.speed,
      fontSize: action.payload.fontSize,
    };
  },
}, defaultState);

export default reducer;
