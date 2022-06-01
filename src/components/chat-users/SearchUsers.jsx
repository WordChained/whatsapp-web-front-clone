import React from "react";
import styles from "./SearchUsers.module.css";
import searchIcon from "../../assets/icons/search.png";
export const SearchUsers = () => {
  return (
    <form className={styles.searchUsersContainer}>
      <input type="text" placeholder="Search or start a new chat" />
      <img src={searchIcon} alt="" />
    </form>
  );
};
