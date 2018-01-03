import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Setting from './setting';
import Sky from './sky';
import Life from './life';
import Container from './container';
import Pop from './pop';

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

const CContainer = connect(
  state => state.setting,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Container);

const CLife = connect(
  state => state.setting,
  null,
)(Life);

const CPop = connect(
  state => state.pop,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Pop);

export {
  CSetting,
  CSky,
  CLife,
  CContainer,
  CPop,
};
