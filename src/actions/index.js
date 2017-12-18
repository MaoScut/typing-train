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

export function setFontSizeAndSpeed(obj) {
  return {
    type: TYPES.SET_FONT_SIZE_AND_SPEED,
    payload: obj,
  };
}
