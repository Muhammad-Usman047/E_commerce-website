import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import CreateAccount from './Pages/CreateAccount';
import Signin from './Pages/Signin';
import logo2 from './logos/logo2.png';

function App() {
  return (
    <>
      <Navbar logo = {logo2} CartGenie = "Cart Genie" F1 = "Home" F2 = "Products" F3 = "Blog" F4 = "Contact" F5 = "CreateAccount" F6 = "Sign in"/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Products' element={<Products />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/CreateAccount' element={<CreateAccount/>} />
        <Route path='/Signin' element={<Signin />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
