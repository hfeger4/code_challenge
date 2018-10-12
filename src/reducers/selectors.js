export const selectAllWidgets = widgets => {
  let arr = Object.keys(widgets).map((id) => (widgets[id]));
  return arr;
}
export const selectAllMachines = machines => {
  let arr = Object.keys(machines).map((id) => (machines[id]));
  return arr;
}
export const selectAllSizes = sizes => {
  let arr = Object.keys(sizes).map((id) => (sizes[id]));
  return arr;
}
