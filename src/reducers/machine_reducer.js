import { RECEIVE_MACHINES } from '../actions/widget_actions';
import merge from 'lodash/merge';

const MachineReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_MACHINES:
      return merge({}, action.machines.data)
    default:
      return state;
  }
}

export default MachineReducer;
