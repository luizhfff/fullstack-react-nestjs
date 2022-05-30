import axios from 'axios'
import React, { useState } from 'react'

import { toast } from 'react-toastify';

type Props = {
    user : {firstName: string, lastName: string, isActive: boolean, id: number}
}

const EditUser = (props: Props) => {
  const [firstName, setFirstName] = useState(props.user.firstName)
  const [lastName, setLastName] = useState(props.user.lastName)

  const createUser = () => {
    if (firstName && lastName) {
      axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/${props.user.id}`, { firstName, lastName, isActive: true })
    } else {
      toast('You need to provide First and Last names', {theme: 'dark'})
    }
  }

  return (
    <>
      <div className='container mt-8'>
        <div className='font-sans font-bold text-lg m-2'>Create User</div>
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
              <button className="mt-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={() => createUser()}>
                Create User
              </button>
            </div>
          </div>
        </form>
      </div>
    </>

  )
}


export default EditUser