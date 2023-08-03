import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";
const UsersList = (props) => {
  console.log(props);
  return (
    <>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
