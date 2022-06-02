import React, { useContext, useEffect, useRef } from "react";
import { UsersContext } from "../../../store/contexts/UsersContext";
import { Message } from "./Message";
import styles from "./Messages.module.css";
export const Messages = () => {
  const { usersState } = useContext(UsersContext);
  const messagesRef = useRef();
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    }
  }, [usersState]);

  return (
    <div ref={messagesRef} className={styles.messagesContainer}>
      {usersState.currentUser.messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
