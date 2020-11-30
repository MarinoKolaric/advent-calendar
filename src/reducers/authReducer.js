export const firebaseAuth = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.user, isSecretUser: action.payload.isSecretUser };
    case "LOGOUT":
      return { ...state, user: action.payload.user, isSecretUser: false };
    default:
      return state;
  }
};
