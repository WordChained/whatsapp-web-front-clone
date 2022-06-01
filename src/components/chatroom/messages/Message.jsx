import React, { useContext } from "react";
import { UsersContext } from "../../../store/contexts/UsersContext";
import styles from "./Message.module.css";
export const Message = ({ message }) => {
  const { usersState } = useContext(UsersContext);
  return (
    <div
      className={`${styles.messageContainer} ${
        usersState.loggedInUser.id === message.senderId && styles.sent
      }`}
    >
      <div className={styles.triangle}></div>
      <span> {message.message}</span>
      <span className={styles.date}>
        {new Date(message.sentAt).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
        {usersState.loggedInUser.id === message.senderId && " ✔✔"}
      </span>
    </div>
  );
};
