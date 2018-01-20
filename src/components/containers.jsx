import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Setting from './setting';
import Statics from './statics';
import Life from './life';
import Container from './container';
import Pop from './pop';

const CSetting = connect(
  state => ({
    ...state.setting,
    show: state.show.setting,
    fetching: state.data.fetchingStatics,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Setting);

const CStatics = connect(
  state => ({
    ...state.setting,
    ...state.statics,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Statics);

const CContainer = connect(
  state => ({
    ...state.setting,
    show: state.show.training,
    dictionary: state.data.dictionary,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Container);

const CLife = connect(
  state => state.setting,
  null,
)(Life);

const CPop = connect(
  state => ({
    showSubmitOverPop: state.show.submitOverPop,
    showTrainOverPop: state.show.trainOverPop,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Pop);

export {
  CSetting,
  // CSky,
  CLife,
  CContainer,
  CPop,
  CStatics,
};
