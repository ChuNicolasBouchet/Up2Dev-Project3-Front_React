import React from 'react';
import { Link } from 'react-router-dom';
import ToolBarItems from './ToolbarData';
import '../../styles/Navbar.css';

function Navbar() {

    return (
            <nav className='navbar__box'>
                <ul className='navbar__box__ul'>  
                    {ToolBarItems.map(item => (
                        <li key={item.title} className='navbar__li'>
                            <Link
                                className={item.className} 
                                activeClassName={item.activeClassName} 
                                to={item.path}>
                                <i>{item.icon}</i>
                                <p>{item.title}</p>
                            </Link>
                        </li>)
                    )}       
                </ul>
            </nav>
    )
}

export default Navbar;

