import { handleActions } from 'redux-actions';
import { SET_FONTSIZE } from '../actions/types';

const defaultState = {
  speed: 1,
  fontSize: 1,
};

const reducer = handleActions({
  [SET_FONTSIZE](state, action) {
    return {
      ...state,
      fontSize: action.payload,
    };
  },
}, defaultState);

export default reducer;
