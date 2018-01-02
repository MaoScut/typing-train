import { combineReducers } from 'redux';
import setting from './setting';
import data from './data';
import pop from './pop';

export default combineReducers({
  setting,
  data,
  pop,
});
