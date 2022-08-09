import React from 'react';
import {ReactComponent as LogoTaskgv} from "../svg/TaskGV_up2.svg";


function LandingLogo() {

    return (
        <div className="landing__logo">
            <div className="landing__overflow-hiddebox">
                <div className="landing__circle_up_left" />
            </div>
            <LogoTaskgv className="landing__taskgv_logo" />
            <div className="landing__cat-left" />
            <div className="landing__cat-middle" />
            <div className="landing__cat-right" />
        </div>
    )
}

export default LandingLogo;