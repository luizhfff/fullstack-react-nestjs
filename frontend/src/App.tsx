import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'
import DisplayUsers from './components/DisplayUsers';
import CreateUser from './components/CreateUser';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`)
      .then(data => {
        setUsers(data.data)
      })
  }, [users])

  const removeElement = (id: number) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`)
  }

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto">
        <DisplayUsers users={users} removeFunc={removeElement} />
        <div className="divider"></div>
        <CreateUser />
      </div >
    </>
  );
}

export default App;


