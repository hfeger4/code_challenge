import {combineReducers} from 'redux';
import WidgetReducer from './widget_reducer';
import MachineReducer from './machine_reducer';
import SizeReducer from './size_reducer';

const rootReducer = combineReducers({
  widgets: WidgetReducer,
  machines: MachineReducer,
  sizes: SizeReducer
});

export default rootReducer;
