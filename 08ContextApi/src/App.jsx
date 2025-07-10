import React from 'react'
import './App.css';
import UserContextProvider
  from './context/UserContextProvider';
import Login from './compents/Login';
import Profile from './compents/Profile';

const App = () => {
  return (
    <>
      <UserContextProvider>
        <h1>Context App by using react </h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App  