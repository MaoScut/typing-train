import { combineReducers } from 'redux';
import setting from './setting';
import data from './data';
import show from './show';


export default combineReducers({
  setting,
  data,
  show,
});
