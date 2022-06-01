import React from "react";
import { LeftHeader } from "../shared/headers/LeftHeader";
import styles from "./ChatUsers.module.css";
import { SearchUsers } from "./SearchUsers";
import { Users } from "./Users";
export const ChatUsers = () => {
  return (
    <div className={styles.chatUsersContainer}>
      <LeftHeader />
      <SearchUsers />
      <Users />
    </div>
  );
};
