import { RECEIVE_WIDGETS, RECEIVE_WIDGET } from '../actions/widget_actions';
import merge from 'lodash/merge';

const WidgetReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_WIDGETS:
      return merge({}, action.widgets.data)
    case RECEIVE_WIDGET:
      return Object.assign({}, state, {[action.widget.data.id]:action.widget.data});
    default:
      return state;
  }
}

export default WidgetReducer;
