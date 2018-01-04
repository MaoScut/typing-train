// 此reducer用来控制组件的显示
import { handleActions } from 'redux-actions';
import * as TYPES from '../actions/types';

const initialState = {
  setting: true,
  training: false,
  trainOverPop: false,
  submitOverPop: false,
};

const reducer = handleActions({
  [TYPES.ENTER_SETTING]() {
    return initialState;
  },
  [TYPES.ENTER_TRAIN]() {
    return {
      setting: false,
      training: true,
      trainOverPop: false,
      submitOverPop: false,
    };
  },
  [TYPES.TRAIN_OVER]() {
    return {
      setting: false,
      training: false,
      trainOverPop: true,
      submitOverPop: false,
    };
  },
  [TYPES.SUBMIT_OVER]() {
    return {
      setting: false,
      training: false,
      trainOverPop: false,
      submitOverPop: true,
    };
  },
}, initialState);

export default reducer;
