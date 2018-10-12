import { RECEIVE_SIZES } from '../actions/widget_actions';
import merge from 'lodash/merge';

const SizeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SIZES:
      return merge({}, action.sizes.data)
    default:
      return state;
  }
}

export default SizeReducer;
