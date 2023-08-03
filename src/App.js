import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [userLists, setUserLists] = useState([]);
  console.log(userLists);
  const addUserHandler = (uName, uAge) => {
    setUserLists((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userLists} />
    </>
  );
}

export default App;
