import React, { useContext, useEffect, useState } from "react";
import styles from "./User.module.css";
import defaultProfileIcon from "../../assets/icons/user.png";
import { UsersContext } from "../../store/contexts/UsersContext";
import { setCurrentUserAction } from "../../store/actions/usersActions";
import { Marks } from "../shared/Marks";

export const User = ({ user }) => {
  const { usersState, usersDispatch } = useContext(UsersContext);
  const [lastMessage, setLastMessage] = useState("...");
  const onUserLeftClick = () => {
    usersDispatch(setCurrentUserAction(user));
  };
  useEffect(() => {
    if (user.messages.length > 0) {
      setLastMessage(user.messages[user.messages.length - 1].message);
    }
  }, [user.messages.length]);

  const getLastMessageTime = () => {
    if (user.messages.length > 0) {
      const lastMessageTimestamp =
        user.messages[user.messages.length - 1].sentAt;
      const timestring = new Date(lastMessageTimestamp).toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
      return timestring;
    } else {
      return "";
    }
  };

  const isLastMessageMine = () => {
    return (
      user.messages[user.messages.length - 1].senderId ===
      usersState.loggedInUser.id
    );
  };

  return (
    <div className={styles.userConatiner} onClick={onUserLeftClick}>
      <div className={styles.imageContainer}>
        <img
          src={user.profileImage ? user.profileImage : defaultProfileIcon}
          alt=""
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.upperLine}>
          <span className={styles.title}>{user.name}</span>
          <span className={styles.date}>{getLastMessageTime()}</span>
        </div>
        <div className={styles.lowerLine}>
          <span className={styles.latestMessage}>
            {user.messages.length > 0 && isLastMessageMine() ? <Marks /> : ""}
            {user.messages.length > 0 ? lastMessage : <span>...</span>}
          </span>
        </div>
      </div>
    </div>
  );
};
