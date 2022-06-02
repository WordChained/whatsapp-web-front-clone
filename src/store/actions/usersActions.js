export const setCurrentUserAction = (user) => {
  return { type: "SET_CURRENT_USER", user };
};
export const addMessageAction = (message, userId) => {
  console.log("asdadsasd");
  return { type: "ADD_MESSAGE", message, userId };
};
