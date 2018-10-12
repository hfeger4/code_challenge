import * as APIUtil from '../util/widgets_util';

export const RECEIVE_WIDGETS = 'RECEIVE_WIDGETS';
export const RECEIVE_SIZES = 'RECEIVE_SIZES';
export const RECEIVE_MACHINES = 'RECEIVE_MACHINES';
export const RECEIVE_WIDGET = 'RECEIVE_WIDGET';
export const CREATE_WIDGET = 'CREATE_WIDGET'

export const recieveWidgets = (widgets) => ({
  type: RECEIVE_WIDGETS,
  widgets
})
export const requestWidgets = () => (dispatch) => (
  APIUtil.fetchWidgets().then(widgets => dispatch(recieveWidgets(widgets)))
);

export const recieveSizes = (sizes) => ({
  type: RECEIVE_SIZES,
  sizes
})
export const requestSizes = () => (dispatch) => (
  APIUtil.fetchSizes().then(sizes => dispatch(recieveSizes(sizes)))
);

export const recieveMachines = (machines) => ({
  type: RECEIVE_MACHINES,
  machines
})
export const requestMachines = () => (dispatch) => (
  APIUtil.fetchMachines().then(machines => dispatch(recieveMachines(machines)))
);

export const recieveWidget = (widget) => ({
  type: RECEIVE_WIDGET,
  widget
})
export const createWidget = (name, description, color, machine_id, size_id) => (dispatch) => (
  APIUtil.createWidget(name, description, color, machine_id, size_id).then(widget => {
    dispatch(recieveWidget(widget))
  })
);
