import React from 'react'
import toolBarItems from './interface_items/ToolbarData'
import sideBarItems from './interface_items/SideBarData'
import Bar from './Bar'
import { ReactComponent as LogoTaskgv } from '../svg/TaskGV_up2.svg'

function Workspace() {
    return (
    <div className='workspace'>
        <div className='workspace__side__left__wrapper'>
            <LogoTaskgv className='workspace__logo' />
            <Bar barItems={sideBarItems} barClass='sidebar' />
        </div>
        <div className='workspace__body'>
            <div className="workspace__head">    
                <Bar barItems={toolBarItems} barClass='toolbar' className='toolbar__component'/>
            </div>
            <div className="workspace__main">
                <div className="component__box"></div>
            </div>
        </div>
    </div>
    )
}

export default Workspace