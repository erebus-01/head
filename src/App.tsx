import React from 'react';
import './App.css';
import { Footer, NavbarSide } from './layout'
import { Link, Route, Routes } from 'react-router-dom';
import {
  Collaborations,
  Home,
  PressRoom,
  Shop,
  Support
} from './page'

function App() {
  return (
    <>
      <NavbarSide />
      <Routes >
        <Route path='/' element={ <Home/>} />
        <Route path='/shop' element={ <Shop />} />
        <Route path='/support' element={ <Support />} />
        <Route path='/press_room' element={ <PressRoom />} />
        <Route path='/collaborations' element={ <Collaborations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
