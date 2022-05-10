import axios from 'axios';

const client = axios.create({
  // baseURL: 'http://localhost:8800',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // cors headers
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export const request = ({ ...options }) => {
  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  };

  return client({ ...options }).then(onSuccess, onError);
};
