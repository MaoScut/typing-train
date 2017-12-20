import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const defaultState = {
  speed: 1,
  fontSize: 14,
  start: false,
};

const reducer = handleActions({
  [TYPES.SET_FONT_SIZE_AND_SPEED](state, action) {
    return {
      speed: action.payload.speed,
      fontSize: action.payload.fontSize,
      start: true,
    };
  },
}, defaultState);

export default reducer;
