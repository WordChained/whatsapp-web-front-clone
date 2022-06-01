import { createContext, useReducer } from "react";
import usersReducer, { InitialUsersState } from "../reducers/usersReducer";
export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    InitialUsersState
  );
  return (
    <UsersContext.Provider value={{ usersState, usersDispatch }}>
      {children}
    </UsersContext.Provider>
  );
};
