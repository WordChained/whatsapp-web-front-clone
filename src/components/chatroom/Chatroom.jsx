import React, { useContext } from "react";
import { UsersContext } from "../../store/contexts/UsersContext";
import { Homepage } from "../../views/home/Homepage";
import { RightHeader } from "../shared/headers/RightHeader";
import styles from "./Chatroom.module.css";
import { Placeholder } from "./Placeholder";
import { Room } from "./Room";
export const Chatroom = () => {
  const { usersState } = useContext(UsersContext);
  return (
    <div className={styles.chatroomContainer}>
      {usersState.currentUser ? (
        <>
          <RightHeader />
          <Room />
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};
