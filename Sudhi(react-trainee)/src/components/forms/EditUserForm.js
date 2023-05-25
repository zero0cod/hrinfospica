import React, { useState } from "react";
import "./Form.css";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          props.updateUser(user.id, user);
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
        </span>{" "}
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
        <button>Update user</button>
        <button
          onClick={() => props.setEditing(false)}
          className="button muted-button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
