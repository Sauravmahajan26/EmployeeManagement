import React from "react";

function Employee({ user }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="profile-pic"
        />
      </td>
      <td>{`${user.firstName} ${user.lastName}`}</td>
      <td>{`${user.age}/${user.gender.charAt(0).toUpperCase()}`}</td>
      <td>{user.company.title}</td>
      <td>{`${user.address.state}, ${user.address.country}`}</td>
    </tr>
  );
}

export default Employee;
