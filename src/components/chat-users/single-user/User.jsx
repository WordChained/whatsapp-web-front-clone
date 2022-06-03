import React, { useContext, useEffect, useState } from 'react';
import styles from './User.module.css';
import defaultProfileIcon from '../../../assets/icons/user.png';
import { Marks } from '../../shared/Marks';
import { UsersContext } from '../../../store/contexts/UsersContext';
import { setCurrentUserAction } from '../../../store/actions/usersActions';

export const User = ({ user }) => {
  const { usersState, usersDispatch } = useContext(UsersContext);
  const [lastMessage, setLastMessage] = useState('...');
  const [isActive, setIsActive] = useState(false);

  const [profileImage, setProfileImage] = useState(defaultProfileIcon);

  const isImageExists = async () => {
    const img = await user.profileImage;
    setProfileImage(img ? img : defaultProfileIcon);
  };
  useEffect(() => {
    isImageExists();
  }, []);

  const onUserLeftClick = () => {
    usersDispatch(setCurrentUserAction(user));
  };
  useEffect(() => {
    if (user.messages.length > 0) {
      setLastMessage(user.messages[user.messages.length - 1].message);
    }
    if (usersState.currentUser && user.id === usersState.currentUser.id)
      setIsActive(true);
    else false;
    return () => {};
  }, [user.messages.length]);

  useEffect(() => {
    if (usersState.currentUser)
      setIsActive(user.id === usersState.currentUser.id);
  }, [usersState.currentUser]);

  const getLastMessageTime = () => {
    if (user.messages.length > 0) {
      const lastMessageTimestamp =
        user.messages[user.messages.length - 1].sentAt;
      const timestring = new Date(lastMessageTimestamp).toLocaleTimeString(
        'en-US',
        {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }
      );
      return timestring;
    } else {
      return '';
    }
  };

  const isLastMessageMine = () => {
    return (
      user.messages[user.messages.length - 1].senderId ===
      usersState.loggedInUser.id
    );
  };

  return (
    <div
      className={`${styles.userContainer} ${isActive ? styles.active : ''}`}
      onClick={onUserLeftClick}
    >
      <div className={styles.imageContainer}>
        <img src={profileImage} alt='' />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.upperLine}>
          <span className={styles.title}>{user.name}</span>
          <span className={styles.date}>{getLastMessageTime()}</span>
        </div>
        <div className={styles.lowerLine}>
          <span className={styles.latestMessage}>
            {user.messages.length > 0 && isLastMessageMine() ? <Marks /> : ''}
            {user.messages.length > 0 ? lastMessage : <span>...</span>}
          </span>
        </div>
      </div>
    </div>
  );
};
