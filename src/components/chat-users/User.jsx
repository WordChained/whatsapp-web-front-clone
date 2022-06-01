import React, { useContext } from 'react';
import styles from './User.module.css';
import defaultProfileIcon from '../../assets/icons/user.png';
import { UsersContext } from '../../store/contexts/UsersContext';
import { setCurrentUserACtion } from '../../store/actions/usersActions';

export const User = ({ user }) => {
  const { usersState, usersDispatch } = useContext(UsersContext);
  const onUserLeftClick = () => {
    usersDispatch(setCurrentUserACtion(user));
  };
  const getLastMessageTime = () => {
    if (user.messages.length > 0) {
      const lastMessageTimestamp =
        user.messages[user.messages.length - 1].sentAt;
      return new Date(lastMessageTimestamp).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
    } else {
      return '';
    }
  };
  return (
    <div className={styles.userConatiner} onClick={onUserLeftClick}>
      <div className={styles.imageContainer}>
        <img
          src={user.profileImage ? user.profileImage : defaultProfileIcon}
          alt=''
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.upperLine}>
          <span className={styles.title}>{user.name}</span>
          <span className={styles.date}>{getLastMessageTime()}</span>
        </div>
        <div className={styles.lowerLine}>
          <span className={styles.latestMessage}>
            {user.messages.length > 0 ? (
              user.messages[user.messages.length - 1].message
            ) : (
              <span>...</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
