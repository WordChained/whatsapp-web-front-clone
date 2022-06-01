import React, { useContext } from "react";
import { UsersContext } from "../../../store/contexts/UsersContext";
import defaultProfileIcon from "../../../assets/icons/user.png";
import statusIcon from "../../../assets/imgs/charging-circle.png";
import messageIcon from "../../../assets/imgs/comment.png";
import moreIcon from "../../../assets/imgs/more.png";
import styles from "./LeftHeader.module.css";
export const LeftHeader = () => {
  const { usersState } = useContext(UsersContext);
  return (
    <header className={styles.leftHeaderContainer}>
      <div className={styles.profileImageContainer}>
        <img
          src={
            usersState.loggedInUser.profileImage
              ? usersState.loggedInUser.profileImage
              : defaultProfileIcon
          }
          alt=""
        />
      </div>
      <div className={styles.rightSideIcons}>
        <img src={statusIcon} alt="" />
        <img src={messageIcon} alt="" />
        <img src={moreIcon} alt="" />
      </div>
    </header>
  );
};
