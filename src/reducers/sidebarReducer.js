const { SET_SIDE_BAR } = require('../actions/constants');

const sidebarReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SIDE_BAR:
      return {
        sidebarShow: payload,
      };

    default:
      return state;
  }
};

export default sidebarReducer;
