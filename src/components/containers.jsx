import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Setting from './setting';
import FallingObjs from './fallingObjs';

const CSetting = connect(
  state => state.setting,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Setting);

const CFallingObjs = connect(
  state => state.setting,
  null,
)(FallingObjs);

export {
  CSetting,
  CFallingObjs,
};
