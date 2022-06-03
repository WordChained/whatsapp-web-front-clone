import React, { useContext, useEffect, useState } from 'react';
import styles from './RightHeader.module.css';
import defaultUser from '../../../assets/icons/user.png';
import searchIcon from '../../../assets/icons/search.png';
import moreIcon from '../../../assets/imgs/more.png';
import { UsersContext } from '../../../store/contexts/UsersContext';

export const RightHeader = () => {
  const { usersState } = useContext(UsersContext);
  const [profileImage, setProfileImage] = useState(defaultUser);
  const isImageExists = async () => {
    const img = await usersState.currentUser.profileImage;
    setProfileImage(img ? img : defaultUser);
  };
  useEffect(() => {
    isImageExists();
  }, []);
  return (
    <div className={styles.rightHeaderContainer}>
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <img src={profileImage} alt='' />
        </div>
        <div className={styles.nameAndInfo}>
          <span>{usersState.currentUser.name}</span>
          <span>last seen: none of your buisness!</span>
        </div>
      </div>
      <div className={styles.icons}>
        <img src={searchIcon} alt='' />
        <img src={moreIcon} alt='' />
      </div>
    </div>
  );
};
