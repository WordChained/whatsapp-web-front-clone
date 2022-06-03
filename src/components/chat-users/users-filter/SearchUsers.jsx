import React, { useState, useRef } from 'react';
import styles from './SearchUsers.module.css';
import searchIcon from '../../../assets/icons/search.png';
import arrowIcon from '../../../assets/icons/arrow-down.png';
import closeIcon from '../../../assets/icons/close.png';
import { Loader } from '../../shared/loaders/main-loader/Loader';
export const SearchUsers = ({ setFilter }) => {
  let timeout;

  const inputRef = useRef();
  const [isArrow, setIsArrow] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const changeImageToArrowIcon = (ev) => {
    setIsArrow(true);
  };
  const changeImageToSearchIcon = (ev) => {
    if (ev.target.value.length === 0) setIsArrow(false);
  };

  const onClearClick = () => {
    // setShowClearButton(false);
    inputRef.current.value = '';
    setFilter('');
  };

  const debounce = (ev) => {
    setIsTyping(true);
    const value = ev.target.value.trim().toLowerCase();
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsTyping(false);
      console.log('val:', value);
      setFilter(value);
    }, 500);
  };
  return (
    <form
      className={styles.searchUsersContainer}
      onSubmit={(ev) => ev.preventDefault()}
    >
      <input
        ref={inputRef}
        type='text'
        placeholder='Search or start a new chat'
        onFocus={changeImageToArrowIcon}
        onBlur={changeImageToSearchIcon}
        onInput={debounce}
      />
      {inputRef.current && inputRef.current.value.length > 0 && !isTyping && (
        <img
          onClick={onClearClick}
          className={styles.closeButton}
          src={closeIcon}
          alt=''
        />
      )}
      {isTyping && (
        <div className={styles.loaderContainer}>
          <Loader size={25} />
        </div>
      )}
      <img
        className={`${isArrow ? styles.arrow : ''} ${styles.search}`}
        src={isArrow ? arrowIcon : searchIcon}
        alt=''
      />
    </form>
  );
};
