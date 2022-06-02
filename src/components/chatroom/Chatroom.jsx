import React, { useContext } from "react";
import { UsersContext } from "../../store/contexts/UsersContext";
import { RightHeader } from "../shared/headers/RightHeader";
import styles from "./Chatroom.module.css";
import placeholderScreenshot from "../../assets/imgs/placeholder-screenshot.png";
import { Room } from "./room/Room";
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
        <div className={styles.placeholderContainer}>
          <img src={placeholderScreenshot} alt="" />
        </div>
      )}
    </div>
  );
};
