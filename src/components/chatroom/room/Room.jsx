import React, { useContext } from "react";
import styles from "./Room.module.css";
import { UsersContext } from "../../../store/contexts/UsersContext";
import { AddMessage } from "../add-message/AddMessage";
import { Messages } from "../messages/Messages";
export const Room = () => {
  const { usersState } = useContext(UsersContext);
  return (
    <div className={styles.roomContainer}>
      {usersState.currentUser && <Messages />}
      <AddMessage />
    </div>
  );
};
