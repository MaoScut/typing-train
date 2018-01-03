import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const defaultState = {
  speed: 1,
  fontSize: 14,
  hp: 100,
  time: 5 * 60 * 1000,
  enterSetting: true,
  enterTrain: false,
};

const reducer = handleActions({
  [TYPES.SET](state, action) {
    return {
      speed: action.payload.speed,
      fontSize: action.payload.fontSize,
      hp: action.payload.hp,
      time: action.payload.time,
      enterSetting: false,
      enterTrain: true,
    };
  },
  [TYPES.TRAIN_OVER](state) {
    return {
      ...state,
      start: false,
      enterTrain: false,
    };
  },
  [TYPES.ENTER_SETTING](state) {
    return {
      ...state,
      enterSetting: true,
      enterTrain: false,
    };
  },
  [TYPES.ENTER_TRAIN](state) {
    return {
      ...state,
      enterSetting: false,
      enterTrain: true,
    };
  },
}, defaultState);

export default reducer;
