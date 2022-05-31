import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import UpdateUserPage from './pages/UpdateUserPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/update/:id' element={<UpdateUserPage />} />
    </Routes>
  );
}

export default App;


