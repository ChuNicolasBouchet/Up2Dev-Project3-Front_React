import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout()

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }


    return (
        <section>
            <h1>Acceuil </h1>
            <br />
            <p>Vous êtes connecté</p>

            <Link to="/admin">Go to the Admin page</Link>

            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>


        </section>
    )
}

export default Home