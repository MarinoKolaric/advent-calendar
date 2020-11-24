export const daysReducer = (state, action) => {
  switch (action.type) {
    case "OPEN":
      return { ...state, days: action.payload };
    default:
      return state;
  }
};
