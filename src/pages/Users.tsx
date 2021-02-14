import React from 'react'
import { useSelector } from 'react-redux';

import { RootState } from '../reducers';


const Users = () => {
  const { data: users } = useSelector((state: RootState) => state.users);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default Users
