import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const defaultState = {
  speed: 1,
  fontSize: 20,
  hp: 100,
  time: 4 * 60 * 1000,
};

const reducer = handleActions({
  [TYPES.ENTER_TRAIN](state, action) {
    if (action.payload) {
      return {
        speed: action.payload.speed,
        fontSize: action.payload.fontSize,
        hp: action.payload.hp,
        time: action.payload.time,
      };
    }
    return state;
  },
}, defaultState);

export default reducer;
