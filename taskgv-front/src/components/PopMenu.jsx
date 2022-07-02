import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function PopMenu(popMenuProps) {
    const[showPopMenuLinks, setShowPopMenuLinks] = useState(false)
    const handleShowPopMenuLinks = () => {
        setShowPopMenuLinks(!showPopMenuLinks)
    }
    return (
        <nav className={`${popMenuProps.menuClass} ${showPopMenuLinks ? 'show-menu' : 'hide-menu'} `} >
            <ul className={`${popMenuProps.menuClass}__box__ul`}>
                {popMenuProps.menuItems.map(item => ( 
                    <li key={item.title} className={`${popMenuProps.menuClass}__li`}>
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
            <button className={`${popMenuProps.menuClass}__button`} onClick={handleShowPopMenuLinks}>
                <span className="icon-bar"></span>
            </button>
        </nav>
    )
}

export default PopMenu

// TODO afficher le PopMenu -> SI <- l'utilisateur est connecté & with protected route ?
