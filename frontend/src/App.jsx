import React from 'react';
import { Routes, Route } from 'react-router-dom';  // No Router here
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
