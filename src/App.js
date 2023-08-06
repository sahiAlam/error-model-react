import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

const App = () => {
  const [userLists, setUserLists] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserLists((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userLists} />
    </React.Fragment>
  );
};

export default App;
