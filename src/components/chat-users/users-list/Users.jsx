import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../../../store/contexts/UsersContext';
import { User } from '../single-user/User';
import styles from './Users.module.css';
export const Users = ({ filter }) => {
  const { usersState } = useContext(UsersContext);
  const [filteredUsers, setFilteredUsers] = useState(usersState.users);
  useEffect(() => {
    //whenever the filter/users change, we show a filtered list of users
    //if filter is empty, we show all users since we "filter" by an empty string
    setFilteredUsers(
      usersState.users.filter((user) =>
        user.name.toLowerCase().includes(filter)
      )
    );
  }, [filter, usersState.users]);

  return (
    <div className={styles.usersContainer}>
      {!!usersState.users.length &&
        filteredUsers.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};
