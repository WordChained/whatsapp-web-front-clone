export const setCurrentUserAction = (user) => {
  return { type: "SET_CURRENT_USER", user };
};
export const addMessageAction = (message, userId) => {
  return { type: "ADD_MESSAGE", message, userId };
};
