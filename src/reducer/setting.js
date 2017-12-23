import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const defaultState = {
  speed: 1,
  fontSize: 14,
  start: false,
  hp: 100,
};

const reducer = handleActions({
  [TYPES.SET](state, action) {
    return {
      speed: action.payload.speed,
      fontSize: action.payload.fontSize,
      start: true,
      hp: action.payload.hp,
    };
  },
  [TYPES.MISS_ONE](state) {
    return {
      ...state,
      hp: state.hp - 1,
    };
  },
}, defaultState);

export default reducer;
