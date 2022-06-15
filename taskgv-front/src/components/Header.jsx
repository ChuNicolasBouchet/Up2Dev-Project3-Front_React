import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import '../styles/Header.css'
// import Navbar from './bars/Navbar'
// import UserBar from './bars/UserBar'
// import { ReactComponent as LogoTaskgv } from '../svg/TaskGV_up2.svg';

function Header() {
  return (
    <div className='header__box'>
      <div className='placeholder__burger'></div>
      <div className='header__logo_sncf'>
        <img src={require('../assets/sncf-logo.png')} alt='sncf entreprise logo' />
      </div>
      <div className='header__site-name'>T@skGV</div>
      <div className='header__wrapper__growing'></div>
      <div className='header__welcome-user'>Bienvenue Marcel</div>
    </div>
  )
}

export default Header;