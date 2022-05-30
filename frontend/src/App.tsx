import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (users.length === 0) {
      axios.get('https://5000-luizhfff-fullstackreact-w7j5adl4t9s.ws-us46.gitpod.io/user').then(data => setUsers(data.data))
      console.log(users)
    }
  }, [users])

  const removeElement = (id:number) => {
    axios.delete('https://5000-luizhfff-fullstackreact-w7j5adl4t9s.ws-us46.gitpod.io/user', { data: { id: id } })
  }

  return (
    <div className="App">
      Test
      {users && users.map((user: any,index: number) => (
        <>
          <div key={index}>{`${user.firstName} ${user.lastName}`}</div>
          <button onClick={() => removeElement(index)}>Delete</button>
        </>

      ))}
    </div>
  );
}

export default App;
