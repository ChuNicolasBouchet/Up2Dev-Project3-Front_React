import React from 'react';
import { Link } from 'react-router-dom';
import ToolBarItems from './interface_items/ToolBarData';

function ToolBar() {

    return (
            <nav className='toolbar__box'>
                <ul className='toolbar__box__ul'>  
                    {ToolBarItems.map(item => (
                        <li key={item.title} className='toolbar__li'>
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

export default ToolBar;

