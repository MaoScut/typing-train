import * as TYPES from './types';

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
