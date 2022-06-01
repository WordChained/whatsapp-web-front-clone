import React, { useState } from 'react';
import styles from './SearchUsers.module.css';
import searchIcon from '../../assets/icons/search.png';
import arrowIcon from '../../assets/icons/arrow-down.png';
export const SearchUsers = () => {
  const [isArrow, setIsArrow] = useState(false);
  const changeImageToArrowIcon = (ev) => {
    setIsArrow(true);
  };
  const changeImageToSearchIcon = (ev) => {
    if (ev.target.value.length === 0) setIsArrow(false);
  };
  return (
    <form className={styles.searchUsersContainer}>
      <input
        type='text'
        placeholder='Search or start a new chat'
        onFocus={changeImageToArrowIcon}
        onBlur={changeImageToSearchIcon}
      />
      <img
        className={isArrow && styles.arrow}
        src={isArrow ? arrowIcon : searchIcon}
        alt=''
      />
    </form>
  );
};
