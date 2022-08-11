import React from 'react'
import { ReactComponent as MyTasksIco } from '../../svg/myTasks.svg';
import { ReactComponent as ProjectIco } from '../../svg/project.svg';
import { ReactComponent as Kanban } from '../../svg/kanban.svg';
import { ReactComponent as UserIco } from '../../svg/user.svg';
import { ReactComponent as SettingsIco } from '../../svg/projectSettings.svg';
import { ReactComponent as DashboardIco } from '../../svg/favorite.svg';

const SideBarItems = [
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
        id: 6,
        title: 'Utilisateurs',
        path: '/users',
        icon: <UserIco />,
        classname: 'sidebar__element',
        activeclassname: 'sidebar__item__active'
    },
    {
        id: 5,
        title: 'Réglages',
        path: '/',
        icon: <SettingsIco />,
        classname: 'sidebar__element',
        activeclassname: 'sidebar__item__active'
    }
];
export default SideBarItems;