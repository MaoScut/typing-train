// 此reducer用来控制组件的显示
import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const initialState = {
  setting: true,
  training: false,
  trainOverPop: false,
  submitOverPop: false,
  statics: false,
};

const reducer = handleActions({
  [TYPES.ENTER_SETTING]() {
    return initialState;
  },
  [TYPES.ENTER_TRAIN](state) {
    return {
      ...state,
      setting: false,
      training: true,
    };
  },
  [TYPES.TRAIN_OVER](state) {
    return {
      ...state,
      training: false,
      trainOverPop: true,
    };
  },
  [TYPES.SUBMIT_OVER](state) {
    return {
      ...state,
      trainOverPop: false,
      submitOverPop: true,
    };
  },
  [TYPES.SHOW_STATICS](state) {
    return {
      ...state,
      statics: true,
    };
  },
}, initialState);

export default reducer;
