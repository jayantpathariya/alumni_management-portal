import { LOGIN, LOGOUT } from '../constant';

const initialState = {
  userDetails: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userDetails: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        userDetails: {},
      };
    default:
      return state;
  }
};

export default loginReducer;
