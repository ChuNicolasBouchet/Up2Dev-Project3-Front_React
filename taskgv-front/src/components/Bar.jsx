import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Bar(barProps) {
    return (
            <nav className={`${barProps.barClass}__box`}>
                <ul className={`${barProps.barClass}__box__ul`}>  
                    {barProps.barItems.map(item => (
                        <li key={item.title} className={`${barProps.barClass}__li`}>
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

export default Bar;

