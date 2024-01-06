import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginform';
import Signup from './components/signup';
import Navbar from './components/navbar';
import Home from './components/home';
import  About  from './components/About';
import  ContactUs  from './components/contactus';
import Card from './components/cart';
import Buy from './components/buy';
import Footer from './components/footer';
import Add from './components/add';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/cart" element={<Card />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add" element={<Add />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
