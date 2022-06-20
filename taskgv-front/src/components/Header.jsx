import React, {useContext} from 'react'
import AuthContext from "../context/AuthProvider.js"
import { Link } from 'react-router-dom'

// import { ReactComponent as LogoTaskgv } from '../svg/TaskGV_up2.svg';

function Header() {

  const { auth } = useContext(AuthContext);

  return (
    <div className='header__box'>
      <div className='placeholder__burger'></div>
      <div className='header__logo_sncf'>
        <img src={'../assets/sncf-logo.png'} alt='sncf logo' />
      </div>
      <div className='header__site-name'>T@skGV</div>
      <div className='header__wrapper__growing'></div>
      <div className='header__welcome-user'>
        { auth.userInfos ? <div>Bienvenue {auth.userInfos.userEmail}</div> : <Link to='/login'>Connectez-vous</Link> }
      </div>
    </div>
  )
}
export default Header;

// TODO add a link to the user card
// TODO add a logout button
// TODO add an SNCF logo
// TODO remove TaskGV logo
