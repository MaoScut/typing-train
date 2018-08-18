import * as TYPES from './types';
import * as api from '../ajax';

export function setFontSize(size) {
  return {
    type: TYPES.SET_FONTSIZE,
    payload: size,
  };
}

export function setSpeed(speed) {
  return {
    type: TYPES.SET_SPEED,
    payload: speed,
  };
}

export function set(obj) {
  return {
    type: TYPES.ENTER_TRAIN,
    payload: obj,
  };
}

export function missOne() {
  return {
    type: TYPES.MISS_ONE,
  };
}

export function over() {
  return {
    type: TYPES.TRAIN_OVER,
  };
}

export function submitData(data) {
  return (dispatch) => {
    api.saveData(data).then(() => dispatch({
      type: TYPES.SUBMIT_OVER,
    }));
  };
}

export function fetchStaticsData() {
  return (dispatch) => {
    api.fetchStaticsData().then(data => dispatch({
      type: TYPES.RECEIVE_STATICS_DATA,
      payload: JSON.parse(data),
    }));
  };
}

// export function submitData() {
//   return {
//     type: TYPES.SUBMIT_OVER,
//   };
// }

export function enterSetting() {
  return {
    type: TYPES.ENTER_SETTING,
  };
}

export function enterTrain() {
  return {
    type: TYPES.ENTER_TRAIN,
  };
}

export function fetchSingleCharData() {
  return (dispatch) => {
    api.staticsData().then(data => dispatch({
      payload: JSON.parse(data),
      type: TYPES.FETCHED_SINGLE_CHAR_DATA,
    }));
  };
}

export function showStatics() {
  return {
    type: TYPES.SHOW_STATICS,
  };
}
