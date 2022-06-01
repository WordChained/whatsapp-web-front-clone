export const setCurrentUserACtion = (user) => {
  return { type: "SET_CURRENT_USER", user };
};
export const addMessageAction = (message, userId) => {
  console.log("message:", message);
  return { type: "ADD_MESSAGE", message, userId };
};
