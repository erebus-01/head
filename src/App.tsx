import React from 'react';
import './App.css';
import { Footer, NavbarSide } from './layout'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import {
  Collaborations,
  Home,
  PressRoom,
  Shop,
  Support,
  Login,
  Register,
  Detail,
  Cart
} from './page'
import Blog from './page/Blog';

function App() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/signup' && <NavbarSide />}
      <Routes >
        <Route path='/' element={ <Home/>} />
        <Route path='/shop' element={ <Shop />} />
        <Route path='/support' element={ <Support />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/blog' element={ <Blog />} />
        <Route path='/product' element={ <Detail />} />
        <Route path='/press_room' element={ <PressRoom />} />
        <Route path='/collaborations' element={ <Collaborations />} />
        <Route path='/signup' element={ <Register />} />
        <Route path='/login' element={ <Login />} />
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />}
      
    </>
  );
}

export default App;
