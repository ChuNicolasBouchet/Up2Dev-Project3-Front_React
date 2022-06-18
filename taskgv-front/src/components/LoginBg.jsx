import React from 'react'
// import '../styles/LoginBg.css'
import { ReactComponent as LogoTaskgv } from '../svg/TaskGV_up2.svg';
import { ReactComponent as SleeperCircle } from '../svg/sleeper_circle.svg';

function LoginBg() {
    return (
    <div>
        <div className="login_bg" />
        <div className="login_circle_up_left" />
        <LogoTaskgv className="taskgv_logo" />
        <div className="cat-left" />
        <div className="cat-middle" />
        <div className="cat-right" />
        <SleeperCircle className="sleeper_circle" />
    </div>
    )
}

export default LoginBg