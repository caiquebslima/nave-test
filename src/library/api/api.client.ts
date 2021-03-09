import Axios from 'axios';

const client = Axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1',
});

client.interceptors.request.use((config) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNDRhODVmLTNlNmItNDQ0My05ZjY2LTFkOTc0YzQ5ODkwMCIsImVtYWlsIjoidGVzdGluZy11c2VyQG5hdmUucnMiLCJpYXQiOjE2MTQ4MjMyNzN9.CbP_fjTUPDz6LzyNLahX8oU-kJg__fFoHfk4eW9_-i4';

  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  return config;
});

export default client;
