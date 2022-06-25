import React from 'react'
import ToolBar from './ToolBar'
import SideBar from './SideBar'

function Workspace() {
    return (
    <div className='workspace'>
        <div className='workspace__header__wrapper'>
            <ToolBar />
            <SideBar />
        </div>
    <p>Workspace</p>
    <div>
        -
    </div>
    </div>
  )
}

export default Workspace