import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

function Logout() {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = async () => {
        setAuth({})
        await axios.get('http://localhost:5000/api/auth/signout', {
          withCredentials: true,
        }
        )
        navigate('/') //* add the landing url after logout
    }
  return (
    <button onClick={logout}>Déconnexion</button>
  )
}

export default Logout
