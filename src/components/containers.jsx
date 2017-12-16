import { connect } from 'react-redux';
import Setting from './setting';

const CSetting = connect(state => state.setting)(Setting);

export {
  CSetting,
};
