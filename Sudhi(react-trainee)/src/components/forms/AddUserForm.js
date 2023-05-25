import React, { useState } from "react";
import "./Form.css";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    username: "",
    email: "",
    dob: "",
    salary: "",
    gender: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name || !user.username) return;

          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <span className="span 1">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </span>
        <span className="span 1">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </span>
        <span className="span 1">
          <label>email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </span>
        <span className="span 1">
          <label>DOB</label>
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleInputChange}
          />
        </span>
        <span className="span 1">
          <label>salary</label>
          <input
            type="text"
            name="salary"
            value={user.salary}
            onChange={handleInputChange}
          />
        </span>
        <span className="span 1">
          <label>male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleInputChange}
          />
        </span>
        <span className="span 1">
          <label>female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleInputChange}
          />
        </span>
        <span className="span 1">
          <button>Add new user</button>
        </span>
      </form>
    </div>
  );
};

export default AddUserForm;
