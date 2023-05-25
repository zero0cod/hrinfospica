import React, { useState, Fragment } from "react";
import AddUserForm from "./components/forms/AddUserForm";
import EditUserForm from "./components/forms/EditUserForm";
import UserTable from "./components/tables/UserTable";
import NavBar from "./components/NavBar/NavBar";
import "./app.css";

const App = () => {
  // Data
  const usersData = [
    {
      id: 1,
      name: "erick",
      username: "floppydiskette",
      email: "email",
      dob: "2/2/1998",
      salary: "10000",
      gender: "male",
    },
    {
      id: 2,
      name: "Craig",
      username: "siliconeidolon",
      email: "email",
      dob: "2/2/1998",
      salary: "10000",
      gender: "male",
    },
    {
      id: 3,
      name: "Ben",
      username: "benisphere",
      email: "email",
      dob: "2/2/1998",
      salary: "10000",
      gender: "male",
    },
  ];

  const initialFormState = {
    id: null,
    name: "",
    username: "",
    email: "",
    dob: "",
    salary: "",
    gender: "",
  };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      dob: user.dob,
      salary: user.salary,
      gender: user.gender,
    });
  };

  return (
    <div className="container">
      <NavBar />
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div className="forms">
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="forms">
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="output">
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
