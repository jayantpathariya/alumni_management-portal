import { LOGIN, LOGOUT } from '../constant';

export const addLogin = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const deleteLogin = () => {
  return {
    type: LOGOUT,
  };
};
