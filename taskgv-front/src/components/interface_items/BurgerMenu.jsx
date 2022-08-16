import React from 'react'
import { ReactComponent as MyTasksIco } from '../../svg/myTasks.svg';
import { ReactComponent as ProjectIco } from '../../svg/project.svg';
import { ReactComponent as Kanban } from '../../svg/kanban.svg';
import { ReactComponent as UserIco } from '../../svg/user.svg';
import { ReactComponent as SettingsIco } from '../../svg/projectSettings.svg';
import { ReactComponent as DashboardIco } from '../../svg/favorite.svg';
import { ReactComponent as HomeIco } from '../../svg/home.svg';
import { ReactComponent as FastStartIco } from '../../svg/fastStart.svg';
import { ReactComponent as NewIco } from '../../svg/new.svg';
import { ReactComponent as HelpIco } from '../../svg/help.svg';
import { ReactComponent as NewTaskIco } from '../../svg/newTask.svg';

const BurgerMenuItems = [
    {
        id: 1,
        title: 'Mes tâches',
        path: '/',
        icon: <MyTasksIco />,
        classname: 'sidebar__element',
        activeclassname: 'sidebar__item__active'
    },
    {
        id: 2,
        title: 'Mes projets',
        path: '/',
        icon: <ProjectIco />,
        classname: 'sidebar__element',
        activeclassname: 'sidebar__item__active'
    },
    {
        id: 3,
        title: 'Kanban',
        path: '/',
        icon: <Kanban />,
        classname: 'sidebar__element',
        activeclassname: 'sidebar__item__active'
    },
    {
        id: 4,
        title: 'Tableau de bord',
        path: '/',
        icon: <DashboardIco />,
        classname: 'sidebar__element',
        activeclassname: 'sidebar__item__active'
    },
    {
        id: 5,
        title: 'Utilisateurs',
        path: '/users',
        icon: <UserIco />,
        classname: 'sidebar__element',
        activeclassname: 'sidebar__item__active'
    },
    {
        id: 6,
        title: 'Réglages',
        path: '/',
        icon: <SettingsIco />,
        classname: 'sidebar__element',
        activeclassname: 'sidebar__item__active'
    },
    {
        id: 7,
        title: 'Accueil',
        path: '/',
        icon: <HomeIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 8,
        title: 'Démarrage rapide',
        path: '/',
        icon: <FastStartIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 9,
        title: 'Nouveau projet',
        path: '/',
        icon: <NewIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 10,
        title: 'Nouvelle tâche',
        path: '/',
        icon: <NewTaskIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    },
    {
        id: 11,
        title: 'Aide',
        path: '/',
        icon: <HelpIco />,
        classname: 'toolbar__element',
        activeclassname: 'toolbar__item__active'
    }
];

export default BurgerMenuItems;