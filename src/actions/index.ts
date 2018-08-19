import * as TYPES from './types';
import * as api from '../ajax';

import {
  SettingObj,
  Action,
} from '../class';

export function setFontSize(size: number) {
  return new Action(TYPES.SET_FONTSIZE, size);
}

export function setSpeed(speed: number) {
  return new Action(TYPES.SET_SPEED,speed);
}

export function set(obj: SettingObj) {
  return new Action(TYPES.ENTER_TRAIN,obj);
}

export function missOne() {
  return new Action(TYPES.MISS_ONE);
}

export function over() {
  return new Action(TYPES.TRAIN_OVER);
}

export function submitData(data: any) {
  return (dispatch: Function) => {
    api.saveData(data).then(() => dispatch(new Action(
      TYPES.SUBMIT_OVER,
    )
    ));
  };
}

export function fetchStaticsData() {
  return (dispatch: Function) => {
    api.fetchStaticsData().then(data => dispatch(new Action(
      TYPES.RECEIVE_STATICS_DATA,
      JSON.parse(data),
    )));
  };
}

// export function submitData() {
//   return {
//     type: TYPES.SUBMIT_OVER,
//   };
// }

export function enterSetting() {
  return new Action (TYPES.ENTER_SETTING);
}

export function enterTrain() {
  return {
    type: TYPES.ENTER_TRAIN,
  };
}

export function fetchSingleCharData() {
  return (dispatch: Function) => {
    api.staticsData().then(data => dispatch(new Action(
      TYPES.FETCHED_SINGLE_CHAR_DATA,
      JSON.parse(data),
    )));
  };
}

export function showStatics() {
  return new Action (TYPES.SHOW_STATICS);
}
