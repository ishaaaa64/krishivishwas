import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Login from './pages/Login';
// import SignIn from './pages/SignIn';
import News from './pages/News';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} /> */}
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
