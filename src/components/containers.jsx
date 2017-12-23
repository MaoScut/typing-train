import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Setting from './setting';
import Sky from './sky';
import Life from './life';

const CSetting = connect(
  state => state.setting,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Setting);

const CSky = connect(
  state => state.setting,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Sky);

const CLife = connect(
  state => state.setting,
  null,
)(Life);

export {
  CSetting,
  CSky,
  CLife,
};
