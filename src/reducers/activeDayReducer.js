export const activeDayReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVATE":
      return { ...state, day: action.payload };
    case "DEACTIVATE":
      return { ...state, day: action.payload };
    default:
      return state;
  }
};
