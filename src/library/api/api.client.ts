import Axios from 'axios';

const client = Axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1',
});

export default client;
