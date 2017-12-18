import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Setting from './setting';

const CSetting = connect(
  state => state.setting,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Setting);

export {
  CSetting,
};
