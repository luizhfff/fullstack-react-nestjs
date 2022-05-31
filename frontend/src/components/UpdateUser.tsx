import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

type Props = {
    id : number
}

const UpdateUser = (props: Props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/user/${props.id}`)
    .then(data => {
      setFirstName(data.data.firstName)
      setLastName(data.data.lastName)
    })
  // eslint-disable-next-line
  }, [])
  

  const updateUser = () => {
    if (firstName && lastName) {
      axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/${props.id}`, { firstName, lastName })
      .then(res=> {
        if(res.status === 200) {
          toast('User updated!', {theme: 'dark'})
          navigate('/')
        }
        else toast('There was an issue with your request', {theme: 'dark'})
      })
    } else {
      toast('You need to provide First and Last names', {theme: 'dark'})
    }
  }

  return (
    <>
      <div className='container mt-8'>
        <form className="w-full max-w-sm mt-8">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                First Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Guilherme' required={true}/>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-last-name">
                Last Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-last-name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Facanha' required={true}/>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="mt-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={() => updateUser()}>
                Update User
              </button>
            </div>
          </div>
        </form>
      </div>
    </>

  )
}


export default UpdateUser