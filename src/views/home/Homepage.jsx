import React, { useContext } from "react";
import { ChatUsers } from "../../components/chat-users/ChatUsers";
import { Chatroom } from "../../components/chatroom/Chatroom";
// import { UsersContext } from "../../store/contexts/UsersContext";
import styles from "./Homepage.module.css";
export const Homepage = () => {
  // const { usersState, usersDispatch } = useContext(UsersContext);

  return (
    <div className={styles.homepageContainer}>
      <ChatUsers />
      {/* {usersState.currentUser ? <Chatroom /> : <Homepage />} */}
      <Chatroom />
    </div>
  );
};
