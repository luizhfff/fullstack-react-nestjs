import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import DisplayUsers from '../components/DisplayUsers';
import CreateUser from '../components/CreateUser';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/user`)
    .then(data => {
      setUsers(data.data)
    })
  }, [users])

  const removeElement = (id: number) => {
    axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`)
    .then(res=> {
      if(res.status === 200) toast(`User ID ${id} deleted succesfully`, {theme: 'dark'})
      else toast('There was an issue deleting User', {theme: 'dark'})
    })
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
  )
}

export default Home