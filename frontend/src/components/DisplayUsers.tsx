import React from 'react'

type Props = {
  users: Array<Object>,
  removeFunc: Function
}

const DisplayUsers = (props: Props) => {
  return (
    <>
      <div className='font-sans font-bold text-lg m-2'>Users List</div>
      <table className="table-auto border-separate  border border-slate-500">
        <thead>
          <tr>
            <th className='border-separate  border border-slate-500 p-2'>First name</th>
            <th className='border-separate  border border-slate-500 p-2'>Last Name</th>
            <th className='border-separate  apse border border-slate-500 p-2'>Edit</th>
            <th className='border-separate  apse border border-slate-500 p-2'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            props.users && props.users.map((user: any, index: number) => (
              <tr key={index}>
                <td className='font-sans text-md border-separate  border border-slate-500 p-2' >{user.firstName}</td>
                <td className='font-sans text-md border-separate  border border-slate-500 p-2' >{user.lastName}</td>
                <td className='font-sans text-md border-separate  border border-slate-500 p-2'><button className='bg-purple-500 hover:bg-purple-400 text-white text-sm py-2 px-4 rounded-full' onClick={()=>props.removeFunc(user.id)}>Edit</button></td>
                <td className='font-sans text-md border-separate  border border-slate-500 p-2'><button className='bg-purple-500 hover:bg-purple-400 text-white text-sm py-2 px-4 rounded-full' onClick={()=>props.removeFunc(user.id)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default DisplayUsers
