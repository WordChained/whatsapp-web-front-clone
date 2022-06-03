import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../../../store/contexts/UsersContext';
import { User } from '../single-user/User';
import styles from './Users.module.css';
import FlipMove from 'react-flip-move';
export const Users = ({ filter }) => {
  const { usersState } = useContext(UsersContext);

  const sortUsersByLastMessageTime = () => {
    return [...usersState.users].sort((a, b) => {
      if (!a.messages.length) return 1;
      else if (!b.messages.length) return -1;
      return (
        b.messages[b.messages.length - 1].sentAt -
        a.messages[a.messages.length - 1].sentAt
      );
    });
  };

  const [filteredUsers, setFilteredUsers] = useState(
    sortUsersByLastMessageTime()
  );
  useEffect(() => {
    //whenever the filter/users change, we show a filtered list of users
    //if filter is empty, we show all users since we "filter" by an empty string
    const sortedByLastMessageUsers = sortUsersByLastMessageTime();
    setFilteredUsers(
      sortedByLastMessageUsers.filter((user) =>
        user.name.toLowerCase().includes(filter)
      )
    );
  }, [filter, usersState.users]);

  return (
    <div className={styles.usersContainer}>
      <FlipMove>
        {!!usersState.users.length &&
          filteredUsers.map((user) => <User key={user.id} user={user} />)}
      </FlipMove>
    </div>
  );
};
