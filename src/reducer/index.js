import { combineReducers } from 'redux';
import setting from './setting';
import data from './data';
import show from './show';
import statics from './statics';

export default combineReducers({
  setting,
  data,
  show,
  statics,
});
