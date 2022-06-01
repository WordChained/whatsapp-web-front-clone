import React, { useContext } from "react";
import { UsersContext } from "../../store/contexts/UsersContext";
import { User } from "./User";
import styles from "./Users.module.css";
export const Users = () => {
  const { usersState } = useContext(UsersContext);

  return (
    <div className={styles.usersContainer}>
      {!!usersState.users.length &&
        usersState.users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};
