import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const defaultState = {
  speed: 1,
  fontSize: 14,
  start: false,
  hp: 100,
  time: 5 * 60 * 1000,
};

const reducer = handleActions({
  [TYPES.SET](state, action) {
    return {
      speed: action.payload.speed,
      fontSize: action.payload.fontSize,
      start: true,
      hp: action.payload.hp,
      time: action.payload.time,
    };
  },
  [TYPES.OVER](state) {
    return {
      ...state,
      start: false,
    };
  },
}, defaultState);

export default reducer;
