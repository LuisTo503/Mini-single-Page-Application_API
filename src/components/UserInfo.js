import React from 'react';

const UserInfo = ({ userData, handleLogout }) => {
  return (
    <div>
      <h2>Welcome, {userData.email}</h2>
      <p>Role: {userData.role}</p>
      <button onClick={handleLogout} className='btn btn-danger mt-2 mb-2'>Logout</button>
    </div>
  );
};

export default UserInfo;