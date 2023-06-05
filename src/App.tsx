import React from 'react';
import './App.css';
import { Footer, NavbarSide } from './layout'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {ChatBot} from './components/ChatBot'
import {
  Collaborations,
  Home,
  PressRoom,
  Shop,
  Support,
  Login,
  Register,
  Detail,
  Cart,
  PaymentSuccessful
} from './page'
import Blog from './page/Blog';

const initialOptions = {
  "client-id": "AbPr2O524iQ1Ad-oT2dhHqk7Z92jX2NH0J-KBp7wb3FW774wk4yfC3SFQt4k0Au-eqr3oaVMPWZ8htMG",
  currency: "USD",
  intent: "capture",
};

console.log(localStorage.getItem('userId'))

function App() {
  let location = useLocation();
  return (
    <PayPalScriptProvider options={initialOptions}>
      <ChatBot />
      {location.pathname !== '/login' && location.pathname !== '/payment_successfully/' && location.pathname !== '/signup' && <NavbarSide />}
      <Routes >
        <Route path='/' element={ <Home/>} />
        <Route path='/shop' element={ <Shop />} />
        <Route path='/support' element={ <Support />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/blog' element={ <Blog />} />
        <Route path='/product/detail/:id' element={ <Detail />} />
        <Route path='/press_room' element={ <PressRoom />} />
        <Route path='/collaborations' element={ <Collaborations />} />
        <Route path='/signup' element={ <Register />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/payment_successfully/' element={ <PaymentSuccessful />} />
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/payment_successfully/' && location.pathname !== '/signup' && <Footer />}
      
    </PayPalScriptProvider>
  );
}

export default App;
