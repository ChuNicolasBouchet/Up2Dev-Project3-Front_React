import React from 'react';
import { Link } from "react-router-dom";
import Logout from './Logout'

const Home = () => {

    return (
        <div>
            <h1>Accueil </h1>
            <br />
            <p>home</p>
            <Link to="/usersaxiosjwt">users list with axios with jwt from context</Link>
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