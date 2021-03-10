import Axios from 'axios';
import { store } from '../../library/store';

const client = Axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1',
});

client.interceptors.request.use(async (config) => {
  const state = await store?.getState();
  const token = await state.user.auth.token;
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  return config;
});

export default client;
