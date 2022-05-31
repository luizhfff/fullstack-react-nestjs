import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UpdateUser from '../components/UpdateUser';

const UpdateUserPage = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate()
  return (
    <>
      <div className="container mx-auto">
        <div className='font-sans font-bold text-lg m-2'>Update User</div>
        <button className='bg-purple-500 hover:bg-purple-400 text-white text-sm py-2 px-4 rounded-full' onClick={() => navigate(`/`)}>Back</button>
        {id && <UpdateUser id={parseInt(id)}/>}
      </div>
    </>
  )
}

export default UpdateUserPage