import React from 'react'
import { ReactComponent as HomeIco } from '../../svg/home.svg';
import { ReactComponent as FastStartIco } from '../../svg/fastStart.svg';
import { ReactComponent as NewIco } from '../../svg/new.svg';
import { ReactComponent as UserIco } from '../../svg/user.svg';
import { ReactComponent as HelpIco } from '../../svg/help.svg';
import { ReactComponent as NewTaskIco } from '../../svg/newTask.svg';

const ToolBarItems = [
    {
        id: 1,
        title: 'Acceuil',
        path: '/',
        icon: <HomeIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 2,
        title: 'Démarrage rapide',
        path: '/',
        icon: <FastStartIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 3,
        title: 'Nouveau projet',
        path: '/',
        icon: <NewIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 4,
        title: 'Nouvelle tâche',
        path: '/',
        icon: <NewTaskIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 6,
        title: 'Utilisateurs',
        path: '/',
        icon: <UserIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 5,
        title: 'Aide',
        path: '/',
        icon: <HelpIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    }
];
export default ToolBarItems;