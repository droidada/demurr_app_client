import { REMOVE_AUTH, ADD_AUTH, AUTH_FAIL } from '../actions/constants';

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_AUTH:
      return {
        ...state,
        isAuthenticated: true,
      };

    case REMOVE_AUTH:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
      };

    case AUTH_FAIL:
      return {
        ...state,
        errorMessage: payload,
      };

    default:
      return state;
  }
};
