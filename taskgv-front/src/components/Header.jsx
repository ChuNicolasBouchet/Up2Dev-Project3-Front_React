import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/Header.css'
import Navbar from './bars/Navbar'
import UserBar from './bars/UserBar'
import { ReactComponent as LogoTaskgv } from '../svg/TaskGV_up2.svg';

function Header() {
  return (
    <div className='header__box'>
      <div className='header__logo'>
        <LogoTaskgv />
      </div>
      <div className="header__box__tools">
        <UserBar />
        <Navbar />
      </div>
    </div>

  )
}

export default Header;