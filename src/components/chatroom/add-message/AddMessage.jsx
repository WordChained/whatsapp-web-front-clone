import React, { useContext, useId, useState } from 'react';
import styles from './AddMessage.module.css';
import smileyIcon from '../../../assets/icons/happy.png';
import sendIcon from '../../../assets/icons/send.png';
import micIcon from '../../../assets/icons/microphone-black-shape.png';
import clipIcon from '../../../assets/icons/clip.png';
import { UsersContext } from '../../../store/contexts/UsersContext';
import { addMessageAction } from '../../../store/actions/usersActions';
import { nanoid } from 'nanoid';

export const AddMessage = () => {
  const [inputText, setInputText] = useState('');
  const { usersState, usersDispatch } = useContext(UsersContext);
  const onSubmit = (ev) => {
    ev.preventDefault();
    const text = ev.target.children[2].value.trim();
    if (text.length === 0) return;
    const message = {
      message: text,
      id: nanoid(),
      senderId: usersState.loggedInUser.id,
      sentAt: Date.now(),
    };
    usersDispatch(addMessageAction(message, usersState.currentUser.id));
    ev.target.children[2].value = '';
  };

  return (
    <form onSubmit={onSubmit} className={styles.addMessageContainer}>
      <div className={styles.imageContainer}>
        <img src={smileyIcon} alt='' />
      </div>
      <div className={styles.imageContainer}>
        <img src={clipIcon} alt='' />
      </div>
      <input
        type='text'
        placeholder='Type a message'
        onInput={(ev) => setInputText(ev.target.value.trim())}
      />
      <div className={styles.imageContainer}>
        <button>
          <img src={!!inputText.length ? sendIcon : micIcon} alt='' />
        </button>
      </div>
    </form>
  );
};
