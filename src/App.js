import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './navbar/Nav';
import Carousel from './carousel/Carousel';
import Login from './login/Login';
import Register from './login/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './footer/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
      <Nav />
        <Routes>
          <Route path='/' element={<Carousel />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
