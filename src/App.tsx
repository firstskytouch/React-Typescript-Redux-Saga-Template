import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Users from './pages/Users';

import UsersActions from './reducers/users';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UsersActions.requestUsers())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Users />
    </div>
  );
}

export default App;
