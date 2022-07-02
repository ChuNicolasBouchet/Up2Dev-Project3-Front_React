import React from 'react';
import { Link } from "react-router-dom";
import Logout from './Logout'

const Home = () => {

    return (
        <div>
            <h1>Accueil </h1>
            <p>home</p>
            <div>-</div>
            <Link to="/usersaxioscookie">users list with axios and cookie auth</Link>
            <div>-</div>
            <Link to="/workspace">workspace</Link>
            <div>-</div>
            <Logout />

        </div>
    )
}

export default Home