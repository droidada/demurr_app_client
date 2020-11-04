import React, { createContext, useReducer } from 'react';
import { SET_SIDE_BAR } from '../actions/constants';
import sidebarReducer from '../reducers/sidebarReducer';

const SidebarContext = createContext();

const initialState = {
  sidebarShow: 'responsive',
};

export const SidebarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);

  const toggleSidebar = (val) => {
    dispatch({
      type: SET_SIDE_BAR,
      payload: val,
    });
  };

  return (
    <SidebarContext.Provider value={{ toggleSidebar, state }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
