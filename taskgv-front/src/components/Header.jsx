import React, {useContext} from 'react'
import AuthContext from "../context/AuthProvider.js"
import { Link } from 'react-router-dom'
import SncfLogo from '../assets/sncf-logo.png'
import { ReactComponent as LogoTaskgv } from '../svg/TaskGV_up2.svg';
import Logout from './Logout'
import PopMenu from './PopMenu.jsx';
import toolBarItems from './interface_items/ToolBarData'

function Header() {

  const { auth } = useContext(AuthContext);

  return (
    <div className='header__box'>
      {/* <div className='placeholder__burger'></div> */}
      <PopMenu menuItems={toolBarItems} menuClass='burger' className='burger-component' />
      <div className='header__logo__wrapper'>
        <img className='header__logo__sncf' src={SncfLogo} alt='sncf logo' />
      </div>
      <LogoTaskgv className='header__logo__taskgv'/>
      <div className='header__wrapper__growing'></div>
      <div className='header__user-connect'>
        { auth.userInfos ? <div className='header__welcome-user'>Bienvenue {auth.userInfos.userEmail} <Logout /></div> : <Link className='header__welcome-user' to='/login'>Connectez-vous</Link> }
      </div>
    </div>
  )
}
export default Header;

// TODO add a link to the user card
// TODO add admin menu ?
