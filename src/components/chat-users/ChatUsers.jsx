import React from "react";
import { LeftHeader } from "../shared/headers/LeftHeader";
import styles from "./ChatUsers.module.css";
import { SearchUsers } from "./users-filter/SearchUsers";
import { Users } from "./users-list/Users";
export const ChatUsers = () => {
  return (
    <div className={styles.chatUsersContainer}>
      <LeftHeader />
      <SearchUsers />
      <Users />
    </div>
  );
};
