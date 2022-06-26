import React from 'react'
import toolBarItems from './interface_items/ToolBarData'
import sideBarItems from './interface_items/SideBarData'
import Bar from './Bar'

function Workspace() {
    return (
    <div className='workspace'>
        <div className='workspace__header__wrapper'>
            <Bar barItems={sideBarItems} barClass='sidebar' />
            <Bar barItems={toolBarItems} barClass='toolbar' />
        </div>
    <p>Workspace</p>
    <div>
        -
    </div>
    </div>
    )
}

export default Workspace