import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Setting from './setting';
import Sky from './sky';

const CSetting = connect(
  state => state.setting,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Setting);

const CSky = connect(
  state => state.setting,
  null,
)(Sky);

export {
  CSetting,
  CSky,
};
