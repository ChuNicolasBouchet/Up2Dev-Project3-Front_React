import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <section>
            <h1>Acceuil </h1>
            <br />
            <p>Vous êtes connecté</p>
            <Link to="/usersaxiosjwt">users list with axios with jwt from context</Link>
            <div>-</div>
            <Link to="/usersaxioscookie">users list with axios and cookie auth</Link>
        </section>
    )
}

export default Home