import React, { useState } from 'react';
import { LeftHeader } from '../shared/headers/LeftHeader';
import styles from './ChatUsers.module.css';
import { SearchUsers } from './users-filter/SearchUsers';
import { Users } from './users-list/Users';
export const ChatUsers = () => {
  const [filter, setFilter] = useState('');
  //sending the list the filter
  //inside the list we handle a local state of filtered user along with the actual list from the reducer
  return (
    <div className={styles.chatUsersContainer}>
      <LeftHeader />
      <SearchUsers setFilter={setFilter} />
      <Users filter={filter} />
    </div>
  );
};
