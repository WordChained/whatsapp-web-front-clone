import React, { useContext, useEffect, useRef } from "react";
import { UsersContext } from "../../../store/contexts/UsersContext";
import { Message } from "./Message";
import styles from "./Messages.module.css";
export const Messages = () => {
  const { usersState } = useContext(UsersContext);
  const messagesRef = useRef();
  useEffect(() => {
    console.log("changed: ", usersState.currentUser.messages.length);
    if (messagesRef.current) {
      console.log("current:", messagesRef.current.scrollHeight);
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    }
  }, [usersState.currentUser.messages]);
  return (
    <div ref={messagesRef} className={styles.messagesContainer}>
      {usersState.currentUser.messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
