import React from "react";
import "./record.css";

const UserTable = (props) => (
  <div className="record-Details">
    <h2>User Information</h2>
    <div className="table-wrapper">
      <table border="1" className="fl-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>email</th>
            <th>dob</th>
            <th>salary</th>
            <th>gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.salary}</td>
              <td>{user.gender}</td>
              <td className="btn">
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className=" link"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className=" link"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </table>
    </div>
  </div>
);

export default UserTable;
