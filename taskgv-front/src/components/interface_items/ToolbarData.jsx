import React from 'react'
import { ReactComponent as HomeIco } from '../../svg/home.svg';
import { ReactComponent as FastStartIco } from '../../svg/fastStart.svg';
import { ReactComponent as NewIco } from '../../svg/new.svg';
import { ReactComponent as HelpIco } from '../../svg/help.svg';
import { ReactComponent as NewTaskIco } from '../../svg/newTask.svg';

const ToolBarItems = [
    {
        id: 1,
        title: 'Accueil',
        path: '/empty',
        icon: <HomeIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 2,
        title: 'Démarrage rapide',
        path: '/empty',
        icon: <FastStartIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 3,
        title: 'Nouveau projet',
        path: '/empty',
        icon: <NewIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 4,
        title: 'Nouvelle tâche',
        path: '/empty',
        icon: <NewTaskIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 5,
        title: 'Aide',
        path: '/empty',
        icon: <HelpIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    }
];
export default ToolBarItems;