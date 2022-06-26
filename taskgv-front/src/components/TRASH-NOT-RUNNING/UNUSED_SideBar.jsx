import React from 'react';
import { Link } from 'react-router-dom';
import SideBarItems from './interface_items/SideBarData';

function SideBar() {

    return (
            <nav className='sidebar__box'>
                <ul className='sidebar__box__ul'>  
                    {SideBarItems.map(item => (
                        <li key={item.title} className='sidebar__li'>
                            <Link
                                className={item.classname} 
                                activeclassname={item.activeclassname} 
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

export default SideBar;

