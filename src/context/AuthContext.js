import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import { ADD_AUTH, AUTH_FAIL, REMOVE_AUTH } from '../actions/constants';
import authReducer from '../reducers/authReducer';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: true,
  errorMessage: null,
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setAuth = useCallback(() => {
    if (localStorage.token && localStorage.token !== undefined) {
      dispatch({
        type: ADD_AUTH,
      });
    }
  }, []);

  const removeLocalToken = useCallback(() => {
    dispatch({
      type: REMOVE_AUTH,
    });
  }, []);

  const setError = useCallback((err) => {
    dispatch({
      type: AUTH_FAIL,
      payload: err,
    });
  }, []);

  const memoizedAuth = useMemo(() => state.isAuthenticated, [
    state.isAuthenticated,
  ]);

  const memoizedErrorMsg = useMemo(() => state.errorMessage, [
    state.errorMessage,
  ]);

  const errorAlert = () => {
    setTimeout(() => {
      dispatch(setError());
    }, 2000);
  };

  return (
    <AuthContext.Provider
      value={{
        memoizedAuth,
        setAuth,
        removeLocalToken,
        setError,
        memoizedErrorMsg,
        errorAlert,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
