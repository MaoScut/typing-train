import * as TYPES from './types';
import api from '../ajax';

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
    type: TYPES.SET,
    payload: obj,
  };
}

export function missOne() {
  return {
    type: TYPES.MISS_ONE,
  };
}

export function submitData(data) {
  return (dispatch) => {
    api(data).then(() => dispatch({
      type: TYPES.SEND_DATA,
    }));
  };
}
