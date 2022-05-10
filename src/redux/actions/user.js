import { DELETE_USER, SET_USER } from '../constant';

export const addUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
