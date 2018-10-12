import axios from 'axios';

export const fetchWidgets = () => {
  const URL = 'https://walles-widgets.herokuapp.com/widgets.json';
  const payload = axios.get(URL);
  return payload;
}

export const fetchSizes = () => {
  const URL = 'https://walles-widgets.herokuapp.com/sizes.json';
  const payload = axios.get(URL);
  return payload;
}

export const fetchMachines = () => {
  const URL = 'https://walles-widgets.herokuapp.com/machines.json';
  const payload = axios.get(URL);
  return payload;
}

export const createWidget = (name,description,color,machine_id,size_id) => {
  const payload = axios.post('https://walles-widgets.herokuapp.com/widgets.json',{
    name,
    description,
    color,
    machine_id,
    size_id
  });
  return payload;
}
